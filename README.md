<img width="100" src="https://raw.githubusercontent.com/loeffel-io/ls-lint/master/assets/logo/ls-lint.png" alt="logo">

# ls-lint - github action

An extremely fast directory and filename linter - Bring some structure to your project filesystem

## Inputs

### `config`

ls-lint config file path(s)

default: `.ls-lint.yml`

### `workdir`

change working directory before executing the given subcommand

default: `.`

### `warn`

write lint errors to stdout instead of stderr (exit 0)

default: `false`

### `debug`

write debug informations to stdout

default: `false`

## Example usage

```yaml
- uses: actions/checkout@v4
- uses: ls-lint/action@v2.2.0
```
