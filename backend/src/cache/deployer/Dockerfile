FROM google/cloud-sdk:alpine3.14.1

RUN apk upgrade --update-cache --available && \
    apk add --update \
    curl \
    which \
    jq \
    bash \
    openssl \
    libcrypto1.1>1.1.1l-r0 \
    libssl1.1>1.1.1l-r0

RUN gcloud components install kubectl

ADD backend/src/cache/deployer/* /kfp/cache/deployer/
RUN chmod -R 777 /kfp/cache/deployer

WORKDIR /kfp/cache/deployer

RUN chmod +x deploy-cache-service.sh
RUN chmod +x webhook-create-signed-cert.sh
RUN chmod +x webhook-patch-ca-bundle.sh

COPY third_party/license.txt /bin/license.txt

ENTRYPOINT ["/bin/sh", "/kfp/cache/deployer/deploy-cache-service.sh"]
