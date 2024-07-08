<img width="100" src="https://raw.githubusercontent.com/loeffel-io/ls-lint/master/assets/logo/ls-lint.png" alt="logo">

# ls-lint - github action

[`ls-lint`](https://github.com/loeffel-io/ls-lint) is an extremely fast directory and filename linter. It brings some structure to your project filesystem.

This repository is the GitHub action that brings `ls-lint` to your project easily.



## Inputs

### `config`

ls-lint config file path(s)

default: `.ls-lint.yml`

More information about the content of this file can be found on [https://ls-lint.org/](https://ls-lint.org/)

### `workdir`

change working directory before executing the given sub-command

default: `.`

### `warn`

write lint errors to stdout instead of stderr (exit 0)

default: `false`

### `debug`

write debug information to stdout

default: `false`

## Example usage

```yaml
- uses: actions/checkout@v4
- uses: ls-lint/action@v2.2.3
```
