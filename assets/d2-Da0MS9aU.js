function n(e){switch(e){case"index":return`direction: down

External_data_sources: {
  label: "External Systems"
}
Esdege: {
  label: "Esdege-Reigersdaal"

  Esdege_employees: {
    label: "Other Departments"
    shape: person
  }
  It_department: {
    label: "Tech Support"
    shape: person
  }
  Planning_and_control: {
    label: "Planning & Control"
    shape: person
  }
  Confluxdb_engineer: {
    label: "ConfluxDB Team"
    shape: person
  }
  Esdege_azure_cloud: {
    label: "Esdege-Reigersdaal Azure Cloud Tenant"
  }
}

External_data_sources -> Esdege.Esdege_azure_cloud: "Sends data to"
Esdege.Confluxdb_engineer -> Esdege.Esdege_azure_cloud: "Works in"
Esdege.Planning_and_control -> Esdege.Confluxdb_engineer: "Requests data pipelines from"
Esdege.Esdege_employees -> Esdege.Confluxdb_engineer: "Requests data pipelines from"
Esdege.Planning_and_control -> Esdege.Esdege_azure_cloud: "Works in"
Esdege.Esdege_employees -> Esdege.Planning_and_control: "Requests business intelligence from"
Esdege.It_department -> Esdege.Esdege_azure_cloud: "Manages"
Esdege.Esdege_azure_cloud -> External_data_sources: "Sends data to"
`;case"azure":return`direction: down

External_data_sources: {
  label: "External Systems"
}
EsdegeConfluxdb_engineer: {
  label: "ConfluxDB Team"
  shape: person
}
EsdegePlanning_and_control: {
  label: "Planning & Control"
  shape: person
}
EsdegeEsdege_azure_cloud: {
  label: "Esdege-Reigersdaal Azure Cloud Tenant"

  Confluxdb: {
    label: "ConfluxDB Group"
  }
  Data_warehouse: {
    label: "Planning & Control Group"
  }
}

External_data_sources -> EsdegeEsdege_azure_cloud.Confluxdb: "Receives data from"
EsdegeConfluxdb_engineer -> EsdegeEsdege_azure_cloud.Confluxdb: "Maintains and expands dataplatform in"
EsdegePlanning_and_control -> EsdegeEsdege_azure_cloud.Data_warehouse: "Consumes and creates datasets from"
EsdegeEsdege_azure_cloud.Confluxdb -> EsdegeEsdege_azure_cloud.Data_warehouse: "Queries data from"
EsdegeEsdege_azure_cloud.Data_warehouse -> EsdegeEsdege_azure_cloud.Confluxdb: "Receives data from"
EsdegeEsdege_azure_cloud.Confluxdb -> External_data_sources: "Queries data from"
`;case"confluxdb":return`direction: down

EsdegeEsdege_azure_cloudConfluxdb: {
  label: "ConfluxDB Group"

  Azure_bastion_jump_host: {
    label: "Azure Bastion Jump Host"
  }
  Azure_monitor: {
    label: "Azure Monitor"
  }
  Network_security_groups: {
    label: "Network Security Groups"
  }
  Azure_private_dns_zone: {
    label: "Azure Private DNS Zone"
  }
  Azure_key_vault: {
    label: "Azure Key Vault"
  }
  Entra_id: {
    label: "Microsoft Entra ID"
  }
  Aks_cluster: {
    label: "AKS Cluster"
  }
  Database: {
    label: "Database"
    shape: stored_data
  }
  Azure_nat_gateway: {
    label: "Azure NAT Gateway"
  }
  Azure_container_registry: {
    label: "Azure Container Registry"
  }
}
EsdegeConfluxdb_engineer: {
  label: "ConfluxDB Team"
  shape: person
}
Github_repo: {
  label: "Repository"
}
Github_runner: {
  label: "Runner"
}
Dagster_ui: {
  label: "Dagster UI"
}
External_data_sources: {
  label: "External Systems"
}
EsdegeEsdege_azure_cloudData_warehouse: {
  label: "Planning & Control Group"
}

Github_runner -> EsdegeEsdege_azure_cloudConfluxdb.Azure_container_registry: "Deploys image to"
Github_runner -> EsdegeEsdege_azure_cloudConfluxdb.Azure_key_vault: "Retrieves runtime secrets from"
EsdegeEsdege_azure_cloudConfluxdb.Aks_cluster -> EsdegeEsdege_azure_cloudConfluxdb.Database: "Read & Write"
EsdegeEsdege_azure_cloudConfluxdb.Aks_cluster -> EsdegeEsdege_azure_cloudConfluxdb.Azure_nat_gateway: "Egresses to"
EsdegeEsdege_azure_cloudConfluxdb.Aks_cluster -> EsdegeEsdege_azure_cloudConfluxdb.Azure_container_registry: "Reads image from"
EsdegeEsdege_azure_cloudConfluxdb.Entra_id -> EsdegeEsdege_azure_cloudConfluxdb.Aks_cluster: "Authenticates"
EsdegeEsdege_azure_cloudConfluxdb.Azure_nat_gateway -> Dagster_ui: "Polls Control Plane over HTTPS"
EsdegeEsdege_azure_cloudConfluxdb.Azure_nat_gateway -> External_data_sources: "Performs outbouund API calls to"
EsdegeEsdege_azure_cloudConfluxdb.Azure_nat_gateway -> EsdegeEsdege_azure_cloudData_warehouse: "Sends data to Data Warehouse"
EsdegeEsdege_azure_cloudConfluxdb.Entra_id -> Github_runner: "Authenticates"
EsdegeConfluxdb_engineer -> Dagster_ui: "Controls Dagster Agent through"
EsdegeConfluxdb_engineer -> Github_repo: "Pushes code to"
Github_repo -> Github_runner: "triggers"
EsdegeConfluxdb_engineer -> EsdegeEsdege_azure_cloudConfluxdb: "Maintains and expands dataplatform in"
`;default:throw new Error("Unknown viewId: "+e)}}export{n as d2Source};
