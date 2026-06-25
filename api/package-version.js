const PACKAGE_NAME = 'deepcode-ai';
const NPM_LATEST_URL = `https://registry.npmjs.org/${PACKAGE_NAME}/latest`;

module.exports = async function handler(_request, response) {
  try {
    const npmResponse = await fetch(NPM_LATEST_URL, {
      headers: { Accept: 'application/json' }
    });

    if (!npmResponse.ok) {
      throw new Error(`npm registry returned ${npmResponse.status}`);
    }

    const pkg = await npmResponse.json();

    if (typeof pkg.version !== 'string' || pkg.version.length === 0) {
      throw new Error('npm registry response did not include a version');
    }

    response.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    response.status(200).json({
      package: PACKAGE_NAME,
      version: pkg.version
    });
  } catch {
    response.setHeader('Cache-Control', 's-maxage=60');
    response.status(502).json({
      package: PACKAGE_NAME,
      error: 'Unable to fetch latest package version'
    });
  }
};
