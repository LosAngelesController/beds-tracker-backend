### Secrets required to make Cloud Run Deploy work

- SQL_INSTANCE_NAME
- PGCLIENTKEY
This is the base64 version of client-key.pem
- PGCLIENTCERT
This is the base64 version of client-cert.pem
- PGSERVERCA
This is the base64 version of server-ca.pem
- CONFIGJSON
raw config.json
- CLOUD_RUN_PROJECT_NAME
literally the project name of the google cloud project
- CLOUD_RUN_SERVICE_ACCOUNT
The raw json of the credentials file of a Service account with permission to do cloud run.
- CLOUD_RUN_SERVICE_ACCOUNT_EMAIL
The email of the service account

When running the api in Google Cloud, ensure that the `sqladmin API (prod)` is enabled in your Google Cloud Project.