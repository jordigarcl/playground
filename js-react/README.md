# js-react

```bash
cd my-app
npm install
npm run dev -- --host 0.0.0.0 --port 5173
```

## Stack

- docker base image: 
  - [`ubuntu`](https://hub.docker.com/_/ubuntu)
    - packages:
      - [`curl`](https://packages.ubuntu.com/plucky/curl)
        - binaries:
          - [`nvm`](https://github.com/nvm-sh/nvm)
            - dependencies
              - [`node`](https://nodejs.org/)
              - [`npm`](https://www.npmjs.com/) (comes bundled with node)

### Sanity check

```
nvm -v
node -v
npm -m
```

### How was the project created?

```
npm create vite@latest my-app -- --template react
```
