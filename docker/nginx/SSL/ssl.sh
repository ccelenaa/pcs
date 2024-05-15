CERT=${1:-rsa};
PREFIX=${2:-dev};

CERT_PATH=certs/$CERT
CONFIG=config

CA_ROOT="ca-root"
CA_ROOT_KEY="$CERT_PATH/$PREFIX-$CA_ROOT"-private-key.pem;
CA_ROOT_REQ="$CERT_PATH/$PREFIX-$CA_ROOT"-request.csr;
CA_ROOT_CRT="$CERT_PATH/$PREFIX-$CA_ROOT"-certificate.pem;
CA_ROOT_CONFIG="$CONFIG/$CA_ROOT".cnf

CA_SERVER="ca-server"
CA_SERVER_KEY="$CERT_PATH/$PREFIX-$CA_SERVER"-private-key.pem;
CA_SERVER_REQ="$CERT_PATH/$PREFIX-$CA_SERVER"-request.csr;
CA_SERVER_CRT="$CERT_PATH/$PREFIX-$CA_SERVER"-certificate.pem;
CA_SERVER_CONFIG="$CONFIG/$CA_SERVER".cnf

TLS="tls"
TLS_REQ="$CERT_PATH/$PREFIX-$TLS"-request.csr;
TLS_KEY="$CERT_PATH/$PREFIX-$TLS"-private-key.pem;
TLS_CRT="$CERT_PATH/$PREFIX-$TLS"-certificate.pem;
TLS_CONFIG="$CONFIG/$TLS".cnf

OCSP="ocsp"
OCSP_REQ="$CERT_PATH/$PREFIX-$OCSP"-request.csr;
OCSP_KEY="$CERT_PATH/$PREFIX-$OCSP"-private-key.pem;
OCSP_CRT="$CERT_PATH/$PREFIX-$OCSP"-certificate.pem;
OCSP_CONFIG="$CONFIG/$OCSP".cnf

mkdir "$CERT_PATH";

# openssl ecparam -list_curves

KEY_TYPE=rsa:2048
# KEY_TYPE=ed25519
# KEY_TYPE="ec -pkeyopt ec_paramgen_curve:prime256v1"


# echo " ----------------------- COMMAND-LINE: Create CAKey & CA Certificate --------------------------";
# CA_ROOT_ADDEXT1='basicConstraints=critical,CA:TRUE';
# CA_ROOT_ADDEXT2='subjectAltName=DNS:example.com,DNS:www.example.com';
# CA_ROOT_SUB='/CN=Arrow Certification Authority/O=Arrow Group/OU=Arrow ECS/L=Courbevoie/ST=Hauts-de-Seine/emailAddress=kamal.mehdi@arrow.com/C=FR';
# openssl req -x509 -sha256 -newkey $KEY_TYPE -keyout "$CA_ROOT_KEY" -out "$CA_ROOT_CRT" -days 365 -nodes -subj "$CA_ROOT_SUB" -addext "$CA_ROOT_ADDEXT1" -addext "$CA_ROOT_ADDEXT2";

# echo " ----------------------- SIGN-NEW-REQUEST: Create CAKey & CA Certificate --------------------------";
# openssl req -x509 -sha256 -newkey $KEY_TYPE -keyout "$CA_ROOT_KEY" -out "$CA_ROOT_CRT" -days 365 -nodes -config "$CA_ROOT_CONFIG";

echo " ----------------------- CA ROOT : create private key & sign-resquest ----------------------------";
openssl req -new -sha256 -newkey $KEY_TYPE -out "$CA_ROOT_REQ" -keyout "$CA_ROOT_KEY" -nodes -config "$CA_ROOT_CONFIG";

echo " ----------------------- CA ROOT : certificate signing --------------------------";
openssl x509 -sha256 -req -in "$CA_ROOT_REQ" -signkey "$CA_ROOT_KEY" -CAcreateserial -out "$CA_ROOT_CRT" -days 365 -copy_extensions copyall -extensions x509_extensions_override -extfile "$CA_ROOT_CONFIG";



echo " ----------------------- CA SERVER : create private key & sign-resquest ----------------------------";
openssl req -new -sha256 -newkey $KEY_TYPE -out "$CA_SERVER_REQ" -keyout "$CA_SERVER_KEY" -nodes -config "$CA_SERVER_CONFIG";

echo " ----------------------- CA SERVER : certificate signing --------------------------";
openssl x509 -sha256 -req -in "$CA_SERVER_REQ" -CA "$CA_ROOT_CRT" -CAkey "$CA_ROOT_KEY" -CAcreateserial -out "$CA_SERVER_CRT" -days 365 -extensions x509_extensions -extfile "$CA_SERVER_CONFIG";



echo " ----------------------- TLS : create private key & sign-resquest ----------------------------";
openssl req -new -sha256 -newkey $KEY_TYPE -out "$TLS_REQ" -keyout "$TLS_KEY" -nodes -config "$TLS_CONFIG";

echo " ----------------------- TLS : certificate signing --------------------------";
openssl x509 -sha256 -req -in "$TLS_REQ" -CA "$CA_SERVER_CRT" -CAkey "$CA_SERVER_KEY" -CAcreateserial -out "$TLS_CRT" -days 365 -extensions x509_extensions -extfile "$TLS_CONFIG";



echo " ----------------------- OCSP : create private key & sign-resquest ----------------------------";
openssl req -new -sha256 -newkey $KEY_TYPE -out "$OCSP_REQ" -keyout "$OCSP_KEY" -nodes -config "$OCSP_CONFIG";

echo " ----------------------- OCSP : certificate signing --------------------------";
openssl x509 -sha256 -req -in "$OCSP_REQ" -CA "$CA_SERVER_CRT" -CAkey "$CA_SERVER_KEY" -CAcreateserial -out "$OCSP_CRT" -days 365 -extensions req_extensions -extfile "$OCSP_CONFIG";
