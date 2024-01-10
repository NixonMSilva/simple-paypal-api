deploy:
	gcloud builds submit . --config=cloudbuild.yaml

deploy-green:
	gcloud builds submit . --config=cloudbuild.yaml
