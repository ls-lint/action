#!/usr/bin/env node

const spawn = require('child_process').spawn;
const path = require('path');

const child = spawn(
    path.join(__dirname, "../node_modules/.bin/ls-lint"),
    [],
    {stdio: [process.stdin, process.stdout, process.stderr]}
);

child.on('close', function (code) {
    if (code !== 0) {
        process.exit(1);
    }
});