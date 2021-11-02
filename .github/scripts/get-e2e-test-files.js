const { exec } = require("child_process");

exec("ls -R ./e2e/ngx-deploy-npm-e2e | grep .spec.ts$", (error, stdout, stderr) => {
    const files = stdout.split('\n')
      .filter((file) => file.length > 0)
      .map((filePath) => `'${filePath}'`)
      .join(', ')

    console.log(`[${files}]`)
});