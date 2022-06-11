const path = require('path');

async function preInit(inputObj) {
    console.log(`
    __      __               _  _____ 
    \ \    / /              | |/ ____|
     \ \  / /   _  ___      | | (___  
      \ \/ / | | |/ _ \ _   | |\___ \ 
       \  /| |_| |  __/| |__| |____) |
        \/  \__,_|\___(_)____/|_____/ 
                                         
`)

    try {
        var process = require('child_process')
        const version = (await process.execSync('s -v')).toString()
        const versionNumber = version.match(/s: 2\.0\.(.*?),/)[1]
        if (Number(versionNumber) < 103) {
            console.log('\x1B[31m%s\x1B[0m', '    * The application requires that the version of Serverless Devs is at least 2.0.103')
            console.log('\x1B[31m%s\x1B[0m', '    * Plaese upgraded through [npm install -g @serverless-devs/s]\n\n')
        }
    } catch (e) {
        console.log(e)
        console.log(`    - Serverless Devs Version >= v2.0.103
        `)
    }
}

async function postInit(inputObj) {
    await inputObj.downloadRequest("https://serverless-devs-app-pkg.oss-cn-beijing.aliyuncs.com/node16.zip", 
        path.join(inputObj.targetPath, 'code/bin'), {  extract: true, strip: 1 }
    );

    console.log(`
    * Before using, please check whether the actions command in Yaml file is available
    * Carefully reading the notes in s.yaml is helpful for the use of the tool
    * If need help in the use process, please apply to join the Dingtalk Group: 33947367
    `)
}
module.exports = {
    postInit,
    preInit
}
