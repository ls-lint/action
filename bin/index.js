#!/usr/bin/env node

const core = require('@actions/core');
const spawn = require('child_process').spawn;
const path = require('path');

const child = spawn(
    path.join(__dirname, "../node_modules/@ls-lint/ls-lint/bin/cli.js"),
    [
        ...core.getInput("config").trim().split(' ').map(value => `--config=${value}`),
        `--workdir=${core.getInput("workdir")}`,
        `--error-output-format=${core.getInput("error-output-format")}`,
        `--debug=${core.getInput("debug")}`,
        `--warn=${core.getInput("warn")}`,
        ...core.getInput("paths").trim().split(' ')
    ],
    {stdio: [process.stdin, process.stdout, process.stderr]}
);

child.on('close', function (code) {
    if (code !== 0) {
        process.exit(1);
    }
});