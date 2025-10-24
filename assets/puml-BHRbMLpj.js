function n(e){switch(e){case"index":return`@startuml
title "Landscape Diagram"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<External_data_sources>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam person<<EsdegeEsdege_employees>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<EsdegeIt_department>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<EsdegePlanning_and_control>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<EsdegeConfluxdb_engineer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<EsdegeEsdege_azure_cloud>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==External Systems\\n\\nAvailable APIs" <<External_data_sources>> as External_data_sources
rectangle "Esdege-Reigersdaal" <<Esdege>> as Esdege {
  skinparam RectangleBorderColor<<Esdege>> #3b82f6
  skinparam RectangleFontColor<<Esdege>> #3b82f6
  skinparam RectangleBorderStyle<<Esdege>> dashed

  person "==Other Departments\\n\\nStakeholders Esdege-Reigersdaal" <<EsdegeEsdege_employees>> as EsdegeEsdege_employees
  person "==Tech Support\\n\\nSecond line tech support" <<EsdegeIt_department>> as EsdegeIt_department
  person "==Planning & Control\\n\\nBusiness Analysts" <<EsdegePlanning_and_control>> as EsdegePlanning_and_control
  person "==ConfluxDB Team\\n\\nSREs & Data Engineers" <<EsdegeConfluxdb_engineer>> as EsdegeConfluxdb_engineer
  rectangle "==Esdege-Reigersdaal Azure Cloud Tenant" <<EsdegeEsdege_azure_cloud>> as EsdegeEsdege_azure_cloud
}

External_data_sources .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloud : "<color:#6E6E6E>Sends data to<color:#6E6E6E>"
EsdegeConfluxdb_engineer .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloud : "<color:#6E6E6E>Works in<color:#6E6E6E>"
EsdegePlanning_and_control .[#6E6E6E,thickness=2].> EsdegeConfluxdb_engineer : "<color:#6E6E6E>Requests data pipelines from<color:#6E6E6E>"
EsdegeEsdege_employees .[#6E6E6E,thickness=2].> EsdegeConfluxdb_engineer : "<color:#6E6E6E>Requests data pipelines from<color:#6E6E6E>"
EsdegePlanning_and_control .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloud : "<color:#6E6E6E>Works in<color:#6E6E6E>"
EsdegeEsdege_employees .[#6E6E6E,thickness=2].> EsdegePlanning_and_control : "<color:#6E6E6E>Requests business intelligence from<color:#6E6E6E>"
EsdegeIt_department .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloud : "<color:#6E6E6E>Manages<color:#6E6E6E>"
EsdegeEsdege_azure_cloud .[#6E6E6E,thickness=2].> External_data_sources : "<color:#6E6E6E>Sends data to<color:#6E6E6E>"
@enduml
`;case"azure":return`@startuml
title "C1 Azure Cloud"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<External_data_sources>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam person<<EsdegeConfluxdb_engineer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<EsdegePlanning_and_control>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<EsdegeEsdege_azure_cloudConfluxdb>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<EsdegeEsdege_azure_cloudData_warehouse>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "==External Systems\\n\\nAvailable APIs" <<External_data_sources>> as External_data_sources
person "==ConfluxDB Team\\n\\nSREs & Data Engineers" <<EsdegeConfluxdb_engineer>> as EsdegeConfluxdb_engineer
person "==Planning & Control\\n\\nBusiness Analysts" <<EsdegePlanning_and_control>> as EsdegePlanning_and_control
rectangle "Esdege-Reigersdaal Azure Cloud Tenant" <<EsdegeEsdege_azure_cloud>> as EsdegeEsdege_azure_cloud {
  skinparam RectangleBorderColor<<EsdegeEsdege_azure_cloud>> #3b82f6
  skinparam RectangleFontColor<<EsdegeEsdege_azure_cloud>> #3b82f6
  skinparam RectangleBorderStyle<<EsdegeEsdege_azure_cloud>> dashed

  rectangle "==ConfluxDB Group\\n\\nManaged by ConfluxDB Team" <<EsdegeEsdege_azure_cloudConfluxdb>> as EsdegeEsdege_azure_cloudConfluxdb
  rectangle "==Planning & Control Group\\n\\nManaged by Planning & Control" <<EsdegeEsdege_azure_cloudData_warehouse>> as EsdegeEsdege_azure_cloudData_warehouse
}

External_data_sources .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudConfluxdb : "<color:#6E6E6E>Receives data from<color:#6E6E6E>"
EsdegeConfluxdb_engineer .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudConfluxdb : "<color:#6E6E6E>Maintains and expands dataplatform in<color:#6E6E6E>"
EsdegePlanning_and_control .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudData_warehouse : "<color:#6E6E6E>Consumes and creates datasets from<color:#6E6E6E>"
EsdegeEsdege_azure_cloudConfluxdb .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudData_warehouse : "<color:#6E6E6E>Queries data from<color:#6E6E6E>"
EsdegeEsdege_azure_cloudData_warehouse .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudConfluxdb : "<color:#6E6E6E>Receives data from<color:#6E6E6E>"
EsdegeEsdege_azure_cloudConfluxdb .[#6E6E6E,thickness=2].> External_data_sources : "<color:#6E6E6E>Queries data from<color:#6E6E6E>"
@enduml
`;case"confluxdb":return`@startuml
title "C2 ConfluxDB Resource Group"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<EsdegeEsdege_azure_cloudConfluxdbAzure_bastion_jump_host>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<EsdegeEsdege_azure_cloudConfluxdbAzure_monitor>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<EsdegeEsdege_azure_cloudConfluxdbNetwork_security_groups>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<EsdegeEsdege_azure_cloudConfluxdbAzure_private_dns_zone>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam person<<EsdegeConfluxdb_engineer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Github_repo>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<Github_runner>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<EsdegeEsdege_azure_cloudConfluxdbAzure_key_vault>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<EsdegeEsdege_azure_cloudConfluxdbEntra_id>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<EsdegeEsdege_azure_cloudConfluxdbAks_cluster>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<EsdegeEsdege_azure_cloudConfluxdbDatabase>>{
  BackgroundColor #AC4D39
  FontColor #FBD3CB
  BorderColor #853A2D
}
skinparam rectangle<<EsdegeEsdege_azure_cloudConfluxdbAzure_nat_gateway>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<EsdegeEsdege_azure_cloudConfluxdbAzure_container_registry>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Dagster_ui>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<External_data_sources>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<EsdegeEsdege_azure_cloudData_warehouse>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "ConfluxDB Group" <<EsdegeEsdege_azure_cloudConfluxdb>> as EsdegeEsdege_azure_cloudConfluxdb {
  skinparam RectangleBorderColor<<EsdegeEsdege_azure_cloudConfluxdb>> #3b82f6
  skinparam RectangleFontColor<<EsdegeEsdege_azure_cloudConfluxdb>> #3b82f6
  skinparam RectangleBorderStyle<<EsdegeEsdege_azure_cloudConfluxdb>> dashed

  rectangle "==Azure Bastion Jump Host\\n\\nEmergency access" <<EsdegeEsdege_azure_cloudConfluxdbAzure_bastion_jump_host>> as EsdegeEsdege_azure_cloudConfluxdbAzure_bastion_jump_host
  rectangle "==Azure Monitor\\n\\nCollects metrics, logs and alerts across resource group" <<EsdegeEsdege_azure_cloudConfluxdbAzure_monitor>> as EsdegeEsdege_azure_cloudConfluxdbAzure_monitor
  rectangle "==Network Security Groups\\n\\nManages and denies cross VNet traffic permitting only required east-west flows" <<EsdegeEsdege_azure_cloudConfluxdbNetwork_security_groups>> as EsdegeEsdege_azure_cloudConfluxdbNetwork_security_groups
  rectangle "==Azure Private DNS Zone\\n\\nHosts records for PostgreSQL, Key Vault and other private endpoints" <<EsdegeEsdege_azure_cloudConfluxdbAzure_private_dns_zone>> as EsdegeEsdege_azure_cloudConfluxdbAzure_private_dns_zone
  rectangle "==Azure Key Vault\\n\\nStores secrets" <<EsdegeEsdege_azure_cloudConfluxdbAzure_key_vault>> as EsdegeEsdege_azure_cloudConfluxdbAzure_key_vault
  rectangle "==Microsoft Entra ID\\n\\nAuthenticates users and applications" <<EsdegeEsdege_azure_cloudConfluxdbEntra_id>> as EsdegeEsdege_azure_cloudConfluxdbEntra_id
  rectangle "==AKS Cluster\\n\\nHosts Dagster agents and Code Worker pods" <<EsdegeEsdege_azure_cloudConfluxdbAks_cluster>> as EsdegeEsdege_azure_cloudConfluxdbAks_cluster
  database "==Database\\n\\nPostgreSQL Database" <<EsdegeEsdege_azure_cloudConfluxdbDatabase>> as EsdegeEsdege_azure_cloudConfluxdbDatabase
  rectangle "==Azure NAT Gateway" <<EsdegeEsdege_azure_cloudConfluxdbAzure_nat_gateway>> as EsdegeEsdege_azure_cloudConfluxdbAzure_nat_gateway
  rectangle "==Azure Container Registry\\n\\nHosts container images" <<EsdegeEsdege_azure_cloudConfluxdbAzure_container_registry>> as EsdegeEsdege_azure_cloudConfluxdbAzure_container_registry
}
person "==ConfluxDB Team\\n\\nSREs & Data Engineers" <<EsdegeConfluxdb_engineer>> as EsdegeConfluxdb_engineer
rectangle "==Repository\\n\\nDagster Agent Repository\\r\\n                Code Worker Repository\\r\\n                IaC Repository\\r\\n                IaC Bootstrap repository" <<Github_repo>> as Github_repo
rectangle "==Runner\\n\\nGithub Actions Runner" <<Github_runner>> as Github_runner
rectangle "==Dagster UI" <<Dagster_ui>> as Dagster_ui
rectangle "==External Systems\\n\\nAvailable APIs" <<External_data_sources>> as External_data_sources
rectangle "==Planning & Control Group\\n\\nManaged by Planning & Control" <<EsdegeEsdege_azure_cloudData_warehouse>> as EsdegeEsdege_azure_cloudData_warehouse

Github_runner .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudConfluxdbAzure_container_registry : "<color:#6E6E6E>Deploys image to<color:#6E6E6E>"
Github_runner .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudConfluxdbAzure_key_vault : "<color:#6E6E6E>Retrieves runtime secrets from<color:#6E6E6E>"
EsdegeEsdege_azure_cloudConfluxdbAks_cluster .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudConfluxdbDatabase : "<color:#6E6E6E>Read & Write<color:#6E6E6E>"
EsdegeEsdege_azure_cloudConfluxdbAks_cluster .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudConfluxdbAzure_nat_gateway : "<color:#6E6E6E>Egresses to<color:#6E6E6E>"
EsdegeEsdege_azure_cloudConfluxdbAks_cluster .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudConfluxdbAzure_container_registry : "<color:#6E6E6E>Reads image from<color:#6E6E6E>"
EsdegeEsdege_azure_cloudConfluxdbEntra_id .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudConfluxdbAks_cluster : "<color:#6E6E6E>Authenticates<color:#6E6E6E>"
EsdegeEsdege_azure_cloudConfluxdbAzure_nat_gateway .[#6E6E6E,thickness=2].> Dagster_ui : "<color:#6E6E6E>Polls Control Plane over HTTPS<color:#6E6E6E>"
EsdegeEsdege_azure_cloudConfluxdbAzure_nat_gateway .[#6E6E6E,thickness=2].> External_data_sources : "<color:#6E6E6E>Performs outbouund API calls to<color:#6E6E6E>"
EsdegeEsdege_azure_cloudConfluxdbAzure_nat_gateway .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudData_warehouse : "<color:#6E6E6E>Sends data to Data Warehouse<color:#6E6E6E>"
EsdegeEsdege_azure_cloudConfluxdbEntra_id .[#6E6E6E,thickness=2].> Github_runner : "<color:#6E6E6E>Authenticates<color:#6E6E6E>"
EsdegeConfluxdb_engineer .[#6E6E6E,thickness=2].> Dagster_ui : "<color:#6E6E6E>Controls Dagster Agent through<color:#6E6E6E>"
EsdegeConfluxdb_engineer .[#6E6E6E,thickness=2].> Github_repo : "<color:#6E6E6E>Pushes code to<color:#6E6E6E>"
Github_repo .[#6E6E6E,thickness=2].> Github_runner : "<color:#6E6E6E>triggers<color:#6E6E6E>"
EsdegeConfluxdb_engineer .[#6E6E6E,thickness=2].> EsdegeEsdege_azure_cloudConfluxdb : "<color:#6E6E6E>Maintains and expands dataplatform in<color:#6E6E6E>"
@enduml
`;default:throw new Error("Unknown viewId: "+e)}}export{n as pumlSource};
