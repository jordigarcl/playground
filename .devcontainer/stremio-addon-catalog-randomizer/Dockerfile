FROM ubuntu:25.04

EXPOSE 5173

ARG NVM_VERSION=v0.40.2
ARG NODE_VERSION=20

RUN apt update && apt install -y \
  curl

# Install nvm 
# https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-in-docker-for-cicd-jobs
RUN curl --output - https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSION/install.sh | bash

# Install node.js, npm through nvm
# https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-in-docker-for-cicd-jobs
RUN bash -c "source /root/.nvm/nvm.sh && nvm install $NODE_VERSION"

# Install vite
# https://vite.dev/guide/#manual-installation
RUN bash -c "source /root/.nvm/nvm.sh && npm install --global vite"

ENTRYPOINT ["bash", "-c", "source /root/.nvm/nvm.sh && exec \"$@\"", "--"]
CMD ["/bin/bash"]
