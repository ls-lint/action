#!/usr/bin/env node

const core = require('@actions/core');
const spawn = require('child_process').spawn;
const path = require('path');

const args = [
    ...core.getInput("config").trim().split(' ').map(value => `--config=${value}`),
    `--workdir=${core.getInput("workdir")}`,
    `--error-output-format=${core.getInput("error-output-format")}`,
    `--debug=${core.getInput("debug")}`,
    `--warn=${core.getInput("warn")}`,
    ...core.getInput("paths").trim().split(' ')
];

const child = spawn(
    path.join(__dirname, "../node_modules/@ls-lint/ls-lint/bin/cli.js"),
    args.filter(Boolean),
    {stdio: 'inherit'}
);

child.on('close', function (code) {
    console.log(`abccccc ${code}`);
    if (code !== 0) {
        process.exit(1);
    }
});