![istio](https://user-images.githubusercontent.com/61206375/206857158-0dd8c318-2169-40dc-9d76-b26fd7c48800.jpg)

![istio2](https://user-images.githubusercontent.com/61206375/206857286-5973d90d-e145-47f9-8be8-1c6cfe3903b0.jpg)

curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh" | bash

sudo install -o root -g root -m 0755 kustomize /usr/local/bin/kustomize

kubectl kustomize overlays/v1

docker build -t tahermarzouk/ms-a:v1 . && docker push tahermarzouk/ms-a:v1

docker build -t tahermarzouk/ms-a:v2 . && docker push tahermarzouk/ms-a:v2

docker build -t tahermarzouk/ms-b:v2 . && docker push tahermarzouk/ms-b:v2

docker build -t tahermarzouk/ms-b:v1 . && docker push tahermarzouk/ms-b:v1

kubectl apply -k overlays/v1

helm repo update

helm install ingress-nginx ingress-nginx/ingress-nginx  --create-namespace  --namespace ingress  --set controller.service.annotations."service\.beta\.kubernetes\.io/azure-load-balancer-health-probe-request-path"=/healthz

installer istio 

curl -L https://istio.io/downloadIstio | sh -

cd istio-1.16.0

export PATH=$PWD/bin:$PATH

install kiali dashboard istio

kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.16/samples/addons/kiali.yaml

istall istio prometheus

kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.16/samples/addons/prometheus.yaml

istioctl dashboard kiali

w temchi lel http://localhost:20001/kiali

kubectl label namespace default istio-injection=enabled

kubectl label namespace ms-b-ns istio-injection=enabled
