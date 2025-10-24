function n(e){switch(e){case"index":return`---
title: "Landscape Diagram"
---
graph TB
  External_data_sources[External Systems]
  subgraph Esdege["Esdege-Reigersdaal"]
    Esdege.Esdege_employees[fa:fa-user Other Departments]
    Esdege.It_department[fa:fa-user Tech Support]
    Esdege.Planning_and_control[fa:fa-user Planning & Control]
    Esdege.Confluxdb_engineer[fa:fa-user ConfluxDB Team]
    Esdege.Esdege_azure_cloud[Esdege-Reigersdaal Azure Cloud Tenant]
  end
  External_data_sources -. "Sends data to" .-> Esdege.Esdege_azure_cloud
  Esdege.Confluxdb_engineer -. "Works in" .-> Esdege.Esdege_azure_cloud
  Esdege.Planning_and_control -. "Requests data pipelines from" .-> Esdege.Confluxdb_engineer
  Esdege.Esdege_employees -. "Requests data pipelines from" .-> Esdege.Confluxdb_engineer
  Esdege.Planning_and_control -. "Works in" .-> Esdege.Esdege_azure_cloud
  Esdege.Esdege_employees -. "Requests business intelligence from" .-> Esdege.Planning_and_control
  Esdege.It_department -. "Manages" .-> Esdege.Esdege_azure_cloud
  Esdege.Esdege_azure_cloud -. "Sends data to" .-> External_data_sources
`;case"azure":return`---
title: "C1 Azure Cloud"
---
graph TB
  External_data_sources[External Systems]
  EsdegeConfluxdb_engineer[fa:fa-user ConfluxDB Team]
  EsdegePlanning_and_control[fa:fa-user Planning & Control]
  subgraph EsdegeEsdege_azure_cloud["Esdege-Reigersdaal Azure Cloud Tenant"]
    EsdegeEsdege_azure_cloud.Confluxdb[ConfluxDB Group]
    EsdegeEsdege_azure_cloud.Data_warehouse[Planning & Control Group]
  end
  External_data_sources -. "Receives data from" .-> EsdegeEsdege_azure_cloud.Confluxdb
  EsdegeConfluxdb_engineer -. "Maintains and expands dataplatform in" .-> EsdegeEsdege_azure_cloud.Confluxdb
  EsdegePlanning_and_control -. "Consumes and creates datasets from" .-> EsdegeEsdege_azure_cloud.Data_warehouse
  EsdegeEsdege_azure_cloud.Confluxdb -. "Queries data from" .-> EsdegeEsdege_azure_cloud.Data_warehouse
  EsdegeEsdege_azure_cloud.Data_warehouse -. "Receives data from" .-> EsdegeEsdege_azure_cloud.Confluxdb
  EsdegeEsdege_azure_cloud.Confluxdb -. "Queries data from" .-> External_data_sources
`;case"confluxdb":return`---
title: "C2 ConfluxDB Resource Group"
---
graph TB
  subgraph EsdegeEsdege_azure_cloudConfluxdb["ConfluxDB Group"]
    EsdegeEsdege_azure_cloudConfluxdb.Azure_bastion_jump_host[Azure Bastion Jump Host]
    EsdegeEsdege_azure_cloudConfluxdb.Azure_monitor[Azure Monitor]
    EsdegeEsdege_azure_cloudConfluxdb.Network_security_groups[Network Security Groups]
    EsdegeEsdege_azure_cloudConfluxdb.Azure_private_dns_zone[Azure Private DNS Zone]
    EsdegeEsdege_azure_cloudConfluxdb.Azure_key_vault[Azure Key Vault]
    EsdegeEsdege_azure_cloudConfluxdb.Entra_id[Microsoft Entra ID]
    EsdegeEsdege_azure_cloudConfluxdb.Aks_cluster[AKS Cluster]
    EsdegeEsdege_azure_cloudConfluxdb.Database([Database])
    EsdegeEsdege_azure_cloudConfluxdb.Azure_nat_gateway[Azure NAT Gateway]
    EsdegeEsdege_azure_cloudConfluxdb.Azure_container_registry[Azure Container Registry]
  end
  EsdegeConfluxdb_engineer[fa:fa-user ConfluxDB Team]
  Github_repo[Repository]
  Github_runner[Runner]
  Dagster_ui[Dagster UI]
  External_data_sources[External Systems]
  EsdegeEsdege_azure_cloudData_warehouse[Planning & Control Group]
  Github_runner -. "Deploys image to" .-> EsdegeEsdege_azure_cloudConfluxdb.Azure_container_registry
  Github_runner -. "Retrieves runtime secrets from" .-> EsdegeEsdege_azure_cloudConfluxdb.Azure_key_vault
  EsdegeEsdege_azure_cloudConfluxdb.Aks_cluster -. "Read & Write" .-> EsdegeEsdege_azure_cloudConfluxdb.Database
  EsdegeEsdege_azure_cloudConfluxdb.Aks_cluster -. "Egresses to" .-> EsdegeEsdege_azure_cloudConfluxdb.Azure_nat_gateway
  EsdegeEsdege_azure_cloudConfluxdb.Aks_cluster -. "Reads image from" .-> EsdegeEsdege_azure_cloudConfluxdb.Azure_container_registry
  EsdegeEsdege_azure_cloudConfluxdb.Entra_id -. "Authenticates" .-> EsdegeEsdege_azure_cloudConfluxdb.Aks_cluster
  EsdegeEsdege_azure_cloudConfluxdb.Azure_nat_gateway -. "Polls Control Plane over HTTPS" .-> Dagster_ui
  EsdegeEsdege_azure_cloudConfluxdb.Azure_nat_gateway -. "Performs outbouund API calls to" .-> External_data_sources
  EsdegeEsdege_azure_cloudConfluxdb.Azure_nat_gateway -. "Sends data to Data Warehouse" .-> EsdegeEsdege_azure_cloudData_warehouse
  EsdegeEsdege_azure_cloudConfluxdb.Entra_id -. "Authenticates" .-> Github_runner
  EsdegeConfluxdb_engineer -. "Controls Dagster Agent through" .-> Dagster_ui
  EsdegeConfluxdb_engineer -. "Pushes code to" .-> Github_repo
  Github_repo -. "triggers" .-> Github_runner
  EsdegeConfluxdb_engineer -. "Maintains and expands dataplatform in" .-> EsdegeEsdege_azure_cloudConfluxdb
`;default:throw new Error("Unknown viewId: "+e)}}export{n as mmdSource};
