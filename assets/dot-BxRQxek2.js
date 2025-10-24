function t(e){switch(e){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_esdege {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ESDEGE-REIGERSDAAL</B></FONT>>,
            likec4_depth=1,
            likec4_id=esdege,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        esdege_employees [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=esdege,
            height=1.875,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="16">Other Departments</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#B6ECF7">Stakeholders Esdege-Reigersdaal</FONT></TD></TR></TABLE>>,
            likec4_id="esdege.esdege_employees",
            likec4_level=1,
            margin="0.139,0.139",
            width=3.334];
        it_department [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=esdege,
            height=1.875,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="16">Tech Support</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#B6ECF7">Second line tech support</FONT></TD></TR></TABLE>>,
            likec4_id="esdege.it_department",
            likec4_level=1,
            margin="0.139,0.139",
            width=3.334];
        planning_and_control [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=esdege,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Planning &amp; Control</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Business Analysts</FONT></TD></TR></TABLE>>,
            likec4_id="esdege.planning_and_control",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        confluxdb_engineer [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=esdege,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">ConfluxDB Team</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">SREs &amp; Data Engineers</FONT></TD></TR></TABLE>>,
            likec4_id="esdege.confluxdb_engineer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        esdege_azure_cloud [group=esdege,
            height=4.028,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="28">Esdege-Reigersdaal Azure Cloud Tenant</FONT></TD><TD WIDTH="16"> </TD></TR></TABLE>>,
            likec4_id="esdege.esdege_azure_cloud",
            likec4_level=1,
            margin="0.112,0.445",
            width=7.223];
    }
    external_data_sources [color="#525252",
        fillcolor="#737373",
        fontcolor="#fafafa",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">External Systems</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Available APIs</FONT></TD></TR></TABLE>>,
        likec4_id=external_data_sources,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    external_data_sources -> esdege_azure_cloud [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends data to</FONT></TD></TR></TABLE>>,
        likec4_id=htrgv,
        style=dashed];
    esdege_employees -> planning_and_control [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Requests business intelligence from</FONT></TD></TR></TABLE>>,
        likec4_id="1lt00hs",
        style=dashed];
    esdege_employees -> confluxdb_engineer [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Requests data pipelines from</FONT></TD></TR></TABLE>>,
        likec4_id="1lsjdck",
        style=dashed];
    it_department -> esdege_azure_cloud [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Manages</FONT></TD></TR></TABLE>>,
        likec4_id=qi3fch,
        minlen=1,
        style=dashed,
        weight=2];
    planning_and_control -> confluxdb_engineer [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Requests data pipelines from</FONT></TD></TR></TABLE>>,
        likec4_id=eukp26,
        style=dashed];
    planning_and_control -> esdege_azure_cloud [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Works in</FONT></TD></TR></TABLE>>,
        likec4_id=yxb7uu,
        style=dashed,
        weight=2];
    confluxdb_engineer -> esdege_azure_cloud [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Works in</FONT></TD></TR></TABLE>>,
        likec4_id="18yoq4y",
        style=dashed,
        weight=2];
    esdege_azure_cloud -> external_data_sources [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends data to</FONT></TD></TR></TABLE>>,
        likec4_id="1snefrj",
        style=dashed];
}`;case"azure":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=azure,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_esdege_azure_cloud {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ESDEGE-REIGERSDAAL AZURE CLOUD TENANT</B></FONT>>,
            likec4_depth=1,
            likec4_id="esdege.esdege_azure_cloud",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        confluxdb [group="esdege.esdege_azure_cloud",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">ConfluxDB Group</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Managed by ConfluxDB Team</FONT></TD></TR></TABLE>>,
            likec4_id="esdege.esdege_azure_cloud.confluxdb",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        data_warehouse [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            group="esdege.esdege_azure_cloud",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Planning &amp; Control Group</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#cbd5e1">Managed by Planning &amp; Control</FONT></TD></TR></TABLE>>,
            likec4_id="esdege.esdege_azure_cloud.data_warehouse",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    external_data_sources [color="#525252",
        fillcolor="#737373",
        fontcolor="#fafafa",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">External Systems</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Available APIs</FONT></TD></TR></TABLE>>,
        likec4_id=external_data_sources,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    external_data_sources -> confluxdb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Receives data from</FONT></TD></TR></TABLE>>,
        likec4_id="7vztmq",
        style=dashed];
    confluxdb_engineer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">ConfluxDB Team</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">SREs &amp; Data Engineers</FONT></TD></TR></TABLE>>,
        likec4_id="esdege.confluxdb_engineer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    confluxdb_engineer -> confluxdb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Maintains and expands dataplatform in</FONT></TD></TR></TABLE>>,
        likec4_id="1vfag9r",
        minlen=1,
        style=dashed,
        weight=2];
    planning_and_control [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Planning &amp; Control</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Business Analysts</FONT></TD></TR></TABLE>>,
        likec4_id="esdege.planning_and_control",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    planning_and_control -> data_warehouse [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Consumes and creates datasets from</FONT></TD></TR></TABLE>>,
        likec4_id="3ulp9e",
        minlen=1,
        style=dashed];
    confluxdb -> external_data_sources [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Queries data from</FONT></TD></TR></TABLE>>,
        likec4_id=zvv0jm,
        style=dashed];
    confluxdb -> data_warehouse [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Queries data from</FONT></TD></TR></TABLE>>,
        likec4_id="18zdphf",
        minlen=0,
        style=dashed];
    data_warehouse -> confluxdb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Receives data from</FONT></TD></TR></TABLE>>,
        likec4_id="1ebjjqb",
        minlen=0,
        style=dashed];
}`;case"confluxdb":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=confluxdb,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_confluxdb {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CONFLUXDB GROUP</B></FONT>>,
            likec4_depth=1,
            likec4_id="esdege.esdege_azure_cloud.confluxdb",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            azure_bastion_jump_host [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Azure Bastion Jump Host</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Emergency access</FONT></TD></TR></TABLE>>,
                likec4_id="esdege.esdege_azure_cloud.confluxdb.azure_bastion_jump_host",
                likec4_level=1,
                margin="0.112,0.223",
                width=4.445];
            azure_monitor [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                height=1.875,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="16"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="16">Azure Monitor</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#cbd5e1">Collects metrics, logs and alerts<BR/>across resource group</FONT></TD></TR></TABLE>>,
                likec4_id="esdege.esdege_azure_cloud.confluxdb.azure_monitor",
                likec4_level=1,
                margin="0.112,0.139",
                width=3.334];
        }
        {
            graph [rank=same];
            network_security_groups [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                height=1.875,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="16"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="16">Network Security Groups</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#cbd5e1">Manages and denies cross VNet<BR/>traffic permitting only required<BR/>east-west flows</FONT></TD></TR></TABLE>>,
                likec4_id="esdege.esdege_azure_cloud.confluxdb.network_security_groups",
                likec4_level=1,
                margin="0.112,0.139",
                width=3.334];
            azure_private_dns_zone [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                height=1.875,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="16"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="16">Azure Private DNS Zone</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#cbd5e1">Hosts records for PostgreSQL, Key<BR/>Vault and other private endpoints</FONT></TD></TR></TABLE>>,
                likec4_id="esdege.esdege_azure_cloud.confluxdb.azure_private_dns_zone",
                likec4_level=1,
                margin="0.112,0.139",
                width=3.334];
        }
        azure_bastion_jump_host -> network_security_groups [minlen=1,
            style=invis];
        azure_key_vault [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Azure Key Vault</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#cbd5e1">Stores secrets</FONT></TD></TR></TABLE>>,
            likec4_id="esdege.esdege_azure_cloud.confluxdb.azure_key_vault",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        entra_id [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            group="esdege.esdege_azure_cloud.confluxdb",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Microsoft Entra ID</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#cbd5e1">Authenticates users and<BR/>applications</FONT></TD></TR></TABLE>>,
            likec4_id="esdege.esdege_azure_cloud.confluxdb.entra_id",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        aks_cluster [group="esdege.esdege_azure_cloud.confluxdb",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">AKS Cluster</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Hosts Dagster agents and Code<BR/>Worker pods</FONT></TD></TR></TABLE>>,
            likec4_id="esdege.esdege_azure_cloud.confluxdb.aks_cluster",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        database [color="#853A2D",
            fillcolor="#AC4D39",
            fontcolor="#FBD3CB",
            group="esdege.esdege_azure_cloud.confluxdb",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Database</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#f5b2a3">PostgreSQL Database</FONT></TD></TR></TABLE>>,
            likec4_id="esdege.esdege_azure_cloud.confluxdb.database",
            likec4_level=1,
            margin="0.112,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        azure_nat_gateway [group="esdege.esdege_azure_cloud.confluxdb",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Azure NAT Gateway</FONT></TD><TD WIDTH="16"> </TD></TR></TABLE>>,
            likec4_id="esdege.esdege_azure_cloud.confluxdb.azure_nat_gateway",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        azure_container_registry [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            group="esdege.esdege_azure_cloud.confluxdb",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Azure Container Registry</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#cbd5e1">Hosts container images</FONT></TD></TR></TABLE>>,
            likec4_id="esdege.esdege_azure_cloud.confluxdb.azure_container_registry",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    azure_monitor -> azure_private_dns_zone [style=invis];
    confluxdb_engineer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">ConfluxDB Team</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">SREs &amp; Data Engineers</FONT></TD></TR></TABLE>>,
        likec4_id="esdege.confluxdb_engineer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    confluxdb_engineer -> azure_bastion_jump_host [arrowhead=normal,
        lhead=cluster_confluxdb,
        likec4_id="1vfag9r",
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Maintains and expands dataplatform in</FONT></TD></TR></TABLE>>];
    github_repo [color="#525252",
        fillcolor="#737373",
        fontcolor="#fafafa",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Repository</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#d4d4d4">Dagster Agent Repository<BR/>Code Worker Repository<BR/>IaC Repository<BR/>IaC Bootstrap repository</FONT></TD></TR></TABLE>>,
        likec4_id=github_repo,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    confluxdb_engineer -> github_repo [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Pushes code to</FONT></TD></TR></TABLE>>,
        likec4_id=awd9ty,
        style=dashed];
    dagster_ui [color="#525252",
        fillcolor="#737373",
        fontcolor="#fafafa",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Dagster UI</FONT>>,
        likec4_id=dagster_ui,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    confluxdb_engineer -> dagster_ui [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Controls Dagster Agent through</FONT></TD></TR></TABLE>>,
        likec4_id="6x2zwl",
        style=dashed,
        weight=3];
    github_runner [color="#525252",
        fillcolor="#737373",
        fontcolor="#fafafa",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Runner</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#d4d4d4">Github Actions Runner</FONT></TD></TR></TABLE>>,
        likec4_id=github_runner,
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    github_repo -> github_runner [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">triggers</FONT></TD></TR></TABLE>>,
        likec4_id="1y4wvw2",
        style=dashed,
        weight=4];
    github_runner -> azure_key_vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Retrieves runtime secrets from</FONT></TD></TR></TABLE>>,
        likec4_id="2u7my9",
        minlen=1,
        style=dashed];
    github_runner -> azure_container_registry [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Deploys image to</FONT></TD></TR></TABLE>>,
        likec4_id="1q56iby",
        style=dashed];
    entra_id -> github_runner [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Authenticates</FONT></TD></TR></TABLE>>,
        likec4_id=nk0jy3,
        style=dashed];
    entra_id -> aks_cluster [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Authenticates</FONT></TD></TR></TABLE>>,
        likec4_id="1kylp88",
        style=dashed,
        weight=4];
    aks_cluster -> database [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Read &amp; Write</FONT></TD></TR></TABLE>>,
        likec4_id=o5hcrn,
        minlen=1,
        style=dashed];
    aks_cluster -> azure_nat_gateway [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Egresses to</FONT></TD></TR></TABLE>>,
        likec4_id="1w547wc",
        style=dashed,
        weight=4];
    aks_cluster -> azure_container_registry [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Reads image from</FONT></TD></TR></TABLE>>,
        likec4_id="63ckod",
        style=dashed,
        weight=4];
    azure_nat_gateway -> dagster_ui [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Polls Control Plane over HTTPS</FONT></TD></TR></TABLE>>,
        likec4_id=ex31g,
        style=dashed];
    external_data_sources [color="#525252",
        fillcolor="#737373",
        fontcolor="#fafafa",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">External Systems</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Available APIs</FONT></TD></TR></TABLE>>,
        likec4_id=external_data_sources,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    azure_nat_gateway -> external_data_sources [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Performs outbouund API calls to</FONT></TD></TR></TABLE>>,
        likec4_id=tk67x2,
        minlen=1,
        style=dashed];
    data_warehouse [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Planning &amp; Control Group</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#cbd5e1">Managed by Planning &amp; Control</FONT></TD></TR></TABLE>>,
        likec4_id="esdege.esdege_azure_cloud.data_warehouse",
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    azure_nat_gateway -> data_warehouse [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends data to Data Warehouse</FONT></TD></TR></TABLE>>,
        likec4_id=f8mu3b,
        minlen=1,
        style=dashed,
        weight=3];
}`;default:throw new Error("Unknown viewId: "+e)}}function n(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.1 (20251006.0113)
 -->
<!-- Pages: 1 -->
<svg width="1082pt" height="1636pt"
 viewBox="0.00 0.00 1082.00 1636.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1620.46)">
<g id="clust1" class="cluster">
<title>cluster_esdege</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-1597.42 1044,-1597.42 1044,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1583.97" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ESDEGE&#45;REIGERSDAAL</text>
</g>
<!-- esdege_employees -->
<g id="node1" class="node">
<title>esdege_employees</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="471.02,-1536.22 230.98,-1536.22 230.98,-1401.22 471.02,-1401.22 471.02,-1536.22"/>
<text xml:space="preserve" text-anchor="start" x="283" y="-1472.32" font-family="Arial" font-size="16.00" fill="#f0f9ff">Other Departments</text>
<text xml:space="preserve" text-anchor="start" x="260" y="-1452.92" font-family="Arial" font-size="12.00" fill="#b6ecf7">Stakeholders Esdege&#45;Reigersdaal</text>
</g>
<!-- it_department -->
<g id="node2" class="node">
<title>it_department</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1004.02,-1536.22 763.98,-1536.22 763.98,-1401.22 1004.02,-1401.22 1004.02,-1536.22"/>
<text xml:space="preserve" text-anchor="start" x="837" y="-1472.32" font-family="Arial" font-size="16.00" fill="#f0f9ff">Tech Support</text>
<text xml:space="preserve" text-anchor="start" x="818" y="-1452.92" font-family="Arial" font-size="12.00" fill="#b6ecf7">Second line tech support</text>
</g>
<!-- planning_and_control -->
<g id="node3" class="node">
<title>planning_and_control</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="773.02,-1258.42 452.98,-1258.42 452.98,-1078.42 773.02,-1078.42 773.02,-1258.42"/>
<text xml:space="preserve" text-anchor="start" x="531" y="-1172.42" font-family="Arial" font-size="20.00" fill="#f0f9ff">Planning &amp; Control</text>
<text xml:space="preserve" text-anchor="start" x="552.5" y="-1149.17" font-family="Arial" font-size="15.00" fill="#b6ecf7">Business Analysts</text>
</g>
<!-- confluxdb_engineer -->
<g id="node4" class="node">
<title>confluxdb_engineer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="431.02,-935.62 110.98,-935.62 110.98,-755.62 431.02,-755.62 431.02,-935.62"/>
<text xml:space="preserve" text-anchor="start" x="196.5" y="-849.62" font-family="Arial" font-size="20.00" fill="#f0f9ff">ConfluxDB Team</text>
<text xml:space="preserve" text-anchor="start" x="190" y="-826.37" font-family="Arial" font-size="15.00" fill="#b6ecf7">SREs &amp; Data Engineers</text>
</g>
<!-- esdege_azure_cloud -->
<g id="node5" class="node">
<title>esdege_azure_cloud</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="965.56,-612.82 336.44,-612.82 336.44,-322.8 965.56,-322.8 965.56,-612.82"/>
<text xml:space="preserve" text-anchor="start" x="385" y="-462.91" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="428.5" y="-458.01" font-family="Arial" font-size="28.00" fill="#eff6ff">Esdege&#45;Reigersdaal Azure Cloud Tenant</text>
<text xml:space="preserve" text-anchor="start" x="944" y="-462.91" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
</g>
<!-- external_data_sources -->
<g id="node6" class="node">
<title>external_data_sources</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="811.02,-180 490.98,-180 490.98,0 811.02,0 811.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="574" y="-94" font-family="Arial" font-size="20.00" fill="#fafafa">External Systems</text>
<text xml:space="preserve" text-anchor="start" x="603" y="-70.75" font-family="Arial" font-size="15.00" fill="#d4d4d4">Available APIs</text>
</g>
<!-- esdege_employees&#45;&gt;planning_and_control -->
<g id="edge2" class="edge">
<title>esdege_employees&#45;&gt;planning_and_control</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M409.15,-1401.51C444.06,-1361.76 489.1,-1310.48 527.96,-1266.24"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="529.91,-1267.99 532.89,-1260.63 525.97,-1264.53 529.91,-1267.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="482,-1318.42 482,-1341.22 709,-1341.22 709,-1318.42 482,-1318.42"/>
<text xml:space="preserve" text-anchor="start" x="485" y="-1324.92" font-family="Arial" font-size="14.00" fill="#c6c6c6">Requests business intelligence from</text>
</g>
<!-- esdege_employees&#45;&gt;confluxdb_engineer -->
<g id="edge3" class="edge">
<title>esdege_employees&#45;&gt;confluxdb_engineer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M292.57,-1401.25C262.43,-1362.47 228.76,-1310.94 213,-1258.42 181.72,-1154.15 207.41,-1029.85 233.81,-945.29"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="236.25,-946.26 236.02,-938.32 231.25,-944.67 236.25,-946.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="213,-1157.02 213,-1179.82 398,-1179.82 398,-1157.02 213,-1157.02"/>
<text xml:space="preserve" text-anchor="start" x="216" y="-1163.52" font-family="Arial" font-size="14.00" fill="#c6c6c6">Requests data pipelines from</text>
</g>
<!-- it_department&#45;&gt;esdege_azure_cloud -->
<g id="edge4" class="edge">
<title>it_department&#45;&gt;esdege_azure_cloud</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M876.61,-1401.23C867.46,-1323.43 850.32,-1190.94 828,-1078.42 799.2,-933.22 787.52,-897.7 746,-755.62 733.31,-712.18 718.38,-665.44 704.16,-622.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="706.67,-621.78 701.81,-615.49 701.69,-623.43 706.67,-621.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="815.75,-995.62 815.75,-1018.42 877.75,-1018.42 877.75,-995.62 815.75,-995.62"/>
<text xml:space="preserve" text-anchor="start" x="818.75" y="-1002.12" font-family="Arial" font-size="14.00" fill="#c6c6c6">Manages</text>
</g>
<!-- planning_and_control&#45;&gt;confluxdb_engineer -->
<g id="edge5" class="edge">
<title>planning_and_control&#45;&gt;confluxdb_engineer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M505.64,-1078.77C482.95,-1059.28 459.41,-1038.46 438,-1018.42 412.57,-994.61 385.91,-968 361.55,-942.96"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="363.62,-941.33 356.51,-937.77 359.85,-944.98 363.62,-941.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="438,-995.62 438,-1018.42 623,-1018.42 623,-995.62 438,-995.62"/>
<text xml:space="preserve" text-anchor="start" x="441" y="-1002.12" font-family="Arial" font-size="14.00" fill="#c6c6c6">Requests data pipelines from</text>
</g>
<!-- planning_and_control&#45;&gt;esdege_azure_cloud -->
<g id="edge6" class="edge">
<title>planning_and_control&#45;&gt;esdege_azure_cloud</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M635.87,-1078.5C640.03,-1058.84 643.76,-1038.03 646,-1018.42 661.15,-885.57 661.21,-733.48 658.16,-623.03"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="660.8,-623.25 657.96,-615.83 655.55,-623.4 660.8,-623.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="659.66,-834.22 659.66,-857.02 718.66,-857.02 718.66,-834.22 659.66,-834.22"/>
<text xml:space="preserve" text-anchor="start" x="662.66" y="-840.72" font-family="Arial" font-size="14.00" fill="#c6c6c6">Works in</text>
</g>
<!-- confluxdb_engineer&#45;&gt;esdege_azure_cloud -->
<g id="edge7" class="edge">
<title>confluxdb_engineer&#45;&gt;esdege_azure_cloud</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M360.57,-756.03C401.6,-715.45 451.4,-666.2 498.1,-620.03"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="499.92,-621.91 503.41,-614.77 496.23,-618.18 499.92,-621.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="438.25,-672.82 438.25,-695.62 497.25,-695.62 497.25,-672.82 438.25,-672.82"/>
<text xml:space="preserve" text-anchor="start" x="441.25" y="-679.32" font-family="Arial" font-size="14.00" fill="#c6c6c6">Works in</text>
</g>
<!-- esdege_azure_cloud&#45;&gt;external_data_sources -->
<g id="edge8" class="edge">
<title>esdege_azure_cloud&#45;&gt;external_data_sources</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M536.46,-322.87C526.53,-295.93 523.41,-267.56 533,-240 539.28,-221.95 548.76,-204.45 559.66,-188.16"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="561.65,-189.91 563.76,-182.25 557.33,-186.92 561.65,-189.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="533,-240 533,-262.8 624,-262.8 624,-240 533,-240"/>
<text xml:space="preserve" text-anchor="start" x="536" y="-246.5" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends data to</text>
</g>
<!-- external_data_sources&#45;&gt;esdege_azure_cloud -->
<g id="edge1" class="edge">
<title>external_data_sources&#45;&gt;esdege_azure_cloud</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M651,-179.8C651,-219.39 651,-267.2 651,-312.36"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="648.38,-312.33 651,-319.83 653.63,-312.33 648.38,-312.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="651,-240 651,-262.8 742,-262.8 742,-240 651,-240"/>
<text xml:space="preserve" text-anchor="start" x="654" y="-246.5" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends data to</text>
</g>
</g>
</svg>`;case"azure":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.1 (20251006.0113)
 -->
<!-- Pages: 1 -->
<svg width="1037pt" height="865pt"
 viewBox="0.00 0.00 1037.00 865.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 849.85)">
<g id="clust1" class="cluster">
<title>cluster_esdege_azure_cloud</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-564 987,-564 987,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-550.55" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ESDEGE&#45;REIGERSDAAL AZURE CLOUD TENANT</text>
</g>
<!-- confluxdb -->
<g id="node1" class="node">
<title>confluxdb</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="372.06,-502.8 47.94,-502.8 47.94,-322.8 372.06,-322.8 372.06,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="96.5" y="-407.9" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140" y="-416.8" font-family="Arial" font-size="20.00" fill="#eff6ff">ConfluxDB Group</text>
<text xml:space="preserve" text-anchor="start" x="350.5" y="-407.9" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140" y="-393.55" font-family="Arial" font-size="15.00" fill="#bfdbfe">Managed by ConfluxDB Team</text>
</g>
<!-- data_warehouse -->
<g id="node2" class="node">
<title>data_warehouse</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="946.56,-502.8 597.44,-502.8 597.44,-322.8 946.56,-322.8 946.56,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="646" y="-407.9" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="689.5" y="-416.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Planning &amp; Control Group</text>
<text xml:space="preserve" text-anchor="start" x="925" y="-407.9" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="689.5" y="-393.55" font-family="Arial" font-size="15.00" fill="#cbd5e1">Managed by Planning &amp; Control</text>
</g>
<!-- external_data_sources -->
<g id="node3" class="node">
<title>external_data_sources</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="369.02,-180 48.98,-180 48.98,0 369.02,0 369.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="132" y="-94" font-family="Arial" font-size="20.00" fill="#fafafa">External Systems</text>
<text xml:space="preserve" text-anchor="start" x="161" y="-70.75" font-family="Arial" font-size="15.00" fill="#d4d4d4">Available APIs</text>
</g>
<!-- confluxdb_engineer -->
<g id="node4" class="node">
<title>confluxdb_engineer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="370.02,-834.8 49.98,-834.8 49.98,-654.8 370.02,-654.8 370.02,-834.8"/>
<text xml:space="preserve" text-anchor="start" x="135.5" y="-748.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">ConfluxDB Team</text>
<text xml:space="preserve" text-anchor="start" x="129" y="-725.55" font-family="Arial" font-size="15.00" fill="#b6ecf7">SREs &amp; Data Engineers</text>
</g>
<!-- planning_and_control -->
<g id="node5" class="node">
<title>planning_and_control</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="932.02,-834.8 611.98,-834.8 611.98,-654.8 932.02,-654.8 932.02,-834.8"/>
<text xml:space="preserve" text-anchor="start" x="690" y="-748.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Planning &amp; Control</text>
<text xml:space="preserve" text-anchor="start" x="711.5" y="-725.55" font-family="Arial" font-size="15.00" fill="#b6ecf7">Business Analysts</text>
</g>
<!-- confluxdb&#45;&gt;data_warehouse -->
<g id="edge5" class="edge">
<title>confluxdb&#45;&gt;data_warehouse</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M371.96,-391.4C390.41,-389.59 408.97,-388.05 426.75,-387 478.22,-383.95 491.28,-384.11 542.75,-387 557.21,-387.81 572.16,-388.91 587.17,-390.19"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="586.84,-392.8 594.55,-390.85 587.31,-387.57 586.84,-392.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="426.75,-387 426.75,-409.8 542.75,-409.8 542.75,-387 426.75,-387"/>
<text xml:space="preserve" text-anchor="start" x="429.75" y="-393.5" font-family="Arial" font-size="14.00" fill="#c6c6c6">Queries data from</text>
</g>
<!-- confluxdb&#45;&gt;external_data_sources -->
<g id="edge4" class="edge">
<title>confluxdb&#45;&gt;external_data_sources</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M105.58,-323.17C90.24,-304.89 76.7,-284.53 68,-262.8 57.4,-236.32 64.68,-210.81 80.4,-187.91"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="82.4,-189.62 84.75,-182.03 78.18,-186.5 82.4,-189.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="68,-240 68,-262.8 184,-262.8 184,-240 68,-240"/>
<text xml:space="preserve" text-anchor="start" x="71" y="-246.5" font-family="Arial" font-size="14.00" fill="#c6c6c6">Queries data from</text>
</g>
<!-- data_warehouse&#45;&gt;confluxdb -->
<g id="edge6" class="edge">
<title>data_warehouse&#45;&gt;confluxdb</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M597.6,-412.8C529.05,-412.8 450.57,-412.8 382.24,-412.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="382.33,-410.18 374.83,-412.8 382.33,-415.43 382.33,-410.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="422.25,-415.8 422.25,-438.6 547.25,-438.6 547.25,-415.8 422.25,-415.8"/>
<text xml:space="preserve" text-anchor="start" x="425.25" y="-422.3" font-family="Arial" font-size="14.00" fill="#c6c6c6">Receives data from</text>
</g>
<!-- external_data_sources&#45;&gt;confluxdb -->
<g id="edge1" class="edge">
<title>external_data_sources&#45;&gt;confluxdb</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M210.39,-179.64C210.64,-199.5 210.87,-220.47 211,-240 211.16,-263.51 211.12,-288.84 211,-312.63"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="208.38,-312.53 210.96,-320.05 213.63,-312.56 208.38,-312.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="211.09,-240 211.09,-262.8 336.09,-262.8 336.09,-240 211.09,-240"/>
<text xml:space="preserve" text-anchor="start" x="214.09" y="-246.5" font-family="Arial" font-size="14.00" fill="#c6c6c6">Receives data from</text>
</g>
<!-- confluxdb_engineer&#45;&gt;confluxdb -->
<g id="edge2" class="edge">
<title>confluxdb_engineer&#45;&gt;confluxdb</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M210,-654.93C210,-611.1 210,-558.08 210,-512.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="212.63,-513.07 210,-505.57 207.38,-513.07 212.63,-513.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="210,-572 210,-594.8 453,-594.8 453,-572 210,-572"/>
<text xml:space="preserve" text-anchor="start" x="213" y="-578.5" font-family="Arial" font-size="14.00" fill="#c6c6c6">Maintains and expands dataplatform in</text>
</g>
<!-- planning_and_control&#45;&gt;data_warehouse -->
<g id="edge3" class="edge">
<title>planning_and_control&#45;&gt;data_warehouse</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M772,-654.93C772,-611.1 772,-558.08 772,-512.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="774.63,-513.07 772,-505.57 769.38,-513.07 774.63,-513.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="772,-572 772,-594.8 1007,-594.8 1007,-572 772,-572"/>
<text xml:space="preserve" text-anchor="start" x="775" y="-578.5" font-family="Arial" font-size="14.00" fill="#c6c6c6">Consumes and creates datasets from</text>
</g>
</g>
</svg>`;case"confluxdb":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.1 (20251006.0113)
 -->
<!-- Pages: 1 -->
<svg width="2533pt" height="1510pt"
 viewBox="0.00 0.00 2533.00 1510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1495.45)">
<g id="clust1" class="cluster">
<title>cluster_confluxdb</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-1209.6 1724,-1209.6 1724,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1196.15" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CONFLUXDB GROUP</text>
</g>
<!-- azure_bastion_jump_host -->
<g id="node1" class="node">
<title>azure_bastion_jump_host</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="396.06,-1148.4 47.94,-1148.4 47.94,-968.4 396.06,-968.4 396.06,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="96.5" y="-1053.5" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140" y="-1062.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Azure Bastion Jump Host</text>
<text xml:space="preserve" text-anchor="start" x="374.5" y="-1053.5" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140" y="-1039.15" font-family="Arial" font-size="15.00" fill="#bfdbfe">Emergency access</text>
</g>
<!-- azure_monitor -->
<g id="node2" class="node">
<title>azure_monitor</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="746.02,-1125.9 505.98,-1125.9 505.98,-990.9 746.02,-990.9 746.02,-1125.9"/>
<text xml:space="preserve" text-anchor="start" x="527.5" y="-1053.5" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="541" y="-1069.2" font-family="Arial" font-size="16.00" fill="#f8fafc">Azure Monitor</text>
<text xml:space="preserve" text-anchor="start" x="721.5" y="-1053.5" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="541" y="-1049.8" font-family="Arial" font-size="12.00" fill="#cbd5e1">Collects metrics, logs and alerts</text>
<text xml:space="preserve" text-anchor="start" x="541" y="-1035.4" font-family="Arial" font-size="12.00" fill="#cbd5e1">across resource group</text>
</g>
<!-- network_security_groups -->
<g id="node3" class="node">
<title>network_security_groups</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="342.56,-803.1 101.44,-803.1 101.44,-668.1 342.56,-668.1 342.56,-803.1"/>
<text xml:space="preserve" text-anchor="start" x="120" y="-730.7" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="133.5" y="-753.6" font-family="Arial" font-size="16.00" fill="#f8fafc">Network Security Groups</text>
<text xml:space="preserve" text-anchor="start" x="321" y="-730.7" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="133.5" y="-734.2" font-family="Arial" font-size="12.00" fill="#cbd5e1">Manages and denies cross VNet</text>
<text xml:space="preserve" text-anchor="start" x="133.5" y="-719.8" font-family="Arial" font-size="12.00" fill="#cbd5e1">traffic permitting only required</text>
<text xml:space="preserve" text-anchor="start" x="133.5" y="-705.4" font-family="Arial" font-size="12.00" fill="#cbd5e1">east&#45;west flows</text>
</g>
<!-- azure_private_dns_zone -->
<g id="node4" class="node">
<title>azure_private_dns_zone</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="736.06,-803.1 483.94,-803.1 483.94,-668.1 736.06,-668.1 736.06,-803.1"/>
<text xml:space="preserve" text-anchor="start" x="502.5" y="-730.7" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="516" y="-746.4" font-family="Arial" font-size="16.00" fill="#f8fafc">Azure Private DNS Zone</text>
<text xml:space="preserve" text-anchor="start" x="714.5" y="-730.7" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="516" y="-727" font-family="Arial" font-size="12.00" fill="#cbd5e1">Hosts records for PostgreSQL, Key</text>
<text xml:space="preserve" text-anchor="start" x="516" y="-712.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">Vault and other private endpoints</text>
</g>
<!-- azure_key_vault -->
<g id="node5" class="node">
<title>azure_key_vault</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1684.02,-502.8 1363.98,-502.8 1363.98,-322.8 1684.02,-322.8 1684.02,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1440" y="-407.9" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1483.5" y="-416.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Azure Key Vault</text>
<text xml:space="preserve" text-anchor="start" x="1635" y="-407.9" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1483.5" y="-393.55" font-family="Arial" font-size="15.00" fill="#cbd5e1">Stores secrets</text>
</g>
<!-- entra_id -->
<g id="node6" class="node">
<title>entra_id</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1176.02,-1148.4 855.98,-1148.4 855.98,-968.4 1176.02,-968.4 1176.02,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="921" y="-1053.5" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="964.5" y="-1071.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Microsoft Entra ID</text>
<text xml:space="preserve" text-anchor="start" x="1138" y="-1053.5" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="964.5" y="-1048.15" font-family="Arial" font-size="15.00" fill="#cbd5e1">Authenticates users and</text>
<text xml:space="preserve" text-anchor="start" x="964.5" y="-1030.15" font-family="Arial" font-size="15.00" fill="#cbd5e1">applications</text>
</g>
<!-- aks_cluster -->
<g id="node7" class="node">
<title>aks_cluster</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1185.56,-825.6 846.44,-825.6 846.44,-645.6 1185.56,-645.6 1185.56,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="895" y="-730.7" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="938.5" y="-748.6" font-family="Arial" font-size="20.00" fill="#eff6ff">AKS Cluster</text>
<text xml:space="preserve" text-anchor="start" x="1164" y="-730.7" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="938.5" y="-725.35" font-family="Arial" font-size="15.00" fill="#bfdbfe">Hosts Dagster agents and Code</text>
<text xml:space="preserve" text-anchor="start" x="938.5" y="-707.35" font-family="Arial" font-size="15.00" fill="#bfdbfe">Worker pods</text>
</g>
<!-- database -->
<g id="node8" class="node">
<title>database</title>
<path fill="#ac4d39" stroke="#853a2d" stroke-width="2" d="M368.02,-486.44C368.02,-495.47 296.3,-502.8 208,-502.8 119.7,-502.8 47.98,-495.47 47.98,-486.44 47.98,-486.44 47.98,-339.16 47.98,-339.16 47.98,-330.13 119.7,-322.8 208,-322.8 296.3,-322.8 368.02,-330.13 368.02,-339.16 368.02,-339.16 368.02,-486.44 368.02,-486.44"/>
<path fill="none" stroke="#853a2d" stroke-width="2" d="M368.02,-486.44C368.02,-477.41 296.3,-470.07 208,-470.07 119.7,-470.07 47.98,-477.41 47.98,-486.44"/>
<text xml:space="preserve" text-anchor="start" x="119.5" y="-407.9" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="163" y="-416.8" font-family="Arial" font-size="20.00" fill="#fbd3cb">Database</text>
<text xml:space="preserve" text-anchor="start" x="323.5" y="-407.9" font-family="Arial" font-size="14.00" fill="#fbd3cb"> </text>
<text xml:space="preserve" text-anchor="start" x="163" y="-393.55" font-family="Arial" font-size="15.00" fill="#f5b2a3">PostgreSQL Database</text>
</g>
<!-- azure_nat_gateway -->
<g id="node9" class="node">
<title>azure_nat_gateway</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-502.8 477.98,-502.8 477.98,-322.8 798.02,-322.8 798.02,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="534.5" y="-407.9" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="578" y="-405.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Azure NAT Gateway</text>
<text xml:space="preserve" text-anchor="start" x="768.5" y="-407.9" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
</g>
<!-- azure_container_registry -->
<g id="node10" class="node">
<title>azure_container_registry</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1254.06,-502.8 907.94,-502.8 907.94,-322.8 1254.06,-322.8 1254.06,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="956.5" y="-407.9" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1000" y="-416.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Azure Container Registry</text>
<text xml:space="preserve" text-anchor="start" x="1232.5" y="-407.9" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1000" y="-393.55" font-family="Arial" font-size="15.00" fill="#cbd5e1">Hosts container images</text>
</g>
<!-- confluxdb_engineer -->
<g id="node11" class="node">
<title>confluxdb_engineer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2464.02,-1480.4 2143.98,-1480.4 2143.98,-1300.4 2464.02,-1300.4 2464.02,-1480.4"/>
<text xml:space="preserve" text-anchor="start" x="2229.5" y="-1394.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">ConfluxDB Team</text>
<text xml:space="preserve" text-anchor="start" x="2223" y="-1371.15" font-family="Arial" font-size="15.00" fill="#b6ecf7">SREs &amp; Data Engineers</text>
</g>
<!-- github_repo -->
<g id="node12" class="node">
<title>github_repo</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="2084.02,-1148.4 1763.98,-1148.4 1763.98,-968.4 2084.02,-968.4 2084.02,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1824.5" y="-1053.5" font-family="Arial" font-size="14.00" fill="#fafafa"> </text>
<text xml:space="preserve" text-anchor="start" x="1868" y="-1089.4" font-family="Arial" font-size="20.00" fill="#fafafa">Repository</text>
<text xml:space="preserve" text-anchor="start" x="2050.5" y="-1053.5" font-family="Arial" font-size="14.00" fill="#fafafa"> </text>
<text xml:space="preserve" text-anchor="start" x="1868" y="-1066.15" font-family="Arial" font-size="15.00" fill="#d4d4d4">Dagster Agent Repository</text>
<text xml:space="preserve" text-anchor="start" x="1868" y="-1048.15" font-family="Arial" font-size="15.00" fill="#d4d4d4">Code Worker Repository</text>
<text xml:space="preserve" text-anchor="start" x="1868" y="-1030.15" font-family="Arial" font-size="15.00" fill="#d4d4d4">IaC Repository</text>
<text xml:space="preserve" text-anchor="start" x="1868" y="-1012.15" font-family="Arial" font-size="15.00" fill="#d4d4d4">IaC Bootstrap repository</text>
</g>
<!-- dagster_ui -->
<g id="node13" class="node">
<title>dagster_ui</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="2464.02,-180 2143.98,-180 2143.98,0 2464.02,0 2464.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="2257" y="-83" font-family="Arial" font-size="20.00" fill="#fafafa">Dagster UI</text>
</g>
<!-- github_runner -->
<g id="node14" class="node">
<title>github_runner</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="2084.02,-825.6 1763.98,-825.6 1763.98,-645.6 2084.02,-645.6 2084.02,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1834.5" y="-730.7" font-family="Arial" font-size="14.00" fill="#fafafa"> </text>
<text xml:space="preserve" text-anchor="start" x="1878" y="-739.6" font-family="Arial" font-size="20.00" fill="#fafafa">Runner</text>
<text xml:space="preserve" text-anchor="start" x="2040.5" y="-730.7" font-family="Arial" font-size="14.00" fill="#fafafa"> </text>
<text xml:space="preserve" text-anchor="start" x="1878" y="-716.35" font-family="Arial" font-size="15.00" fill="#d4d4d4">Github Actions Runner</text>
</g>
<!-- external_data_sources -->
<g id="node15" class="node">
<title>external_data_sources</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="353.02,-180 32.98,-180 32.98,0 353.02,0 353.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="116" y="-94" font-family="Arial" font-size="20.00" fill="#fafafa">External Systems</text>
<text xml:space="preserve" text-anchor="start" x="145" y="-70.75" font-family="Arial" font-size="15.00" fill="#d4d4d4">Available APIs</text>
</g>
<!-- data_warehouse -->
<g id="node16" class="node">
<title>data_warehouse</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="812.56,-180 463.44,-180 463.44,0 812.56,0 812.56,-180"/>
<text xml:space="preserve" text-anchor="start" x="512" y="-85.1" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="555.5" y="-94" font-family="Arial" font-size="20.00" fill="#f8fafc">Planning &amp; Control Group</text>
<text xml:space="preserve" text-anchor="start" x="791" y="-85.1" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="555.5" y="-70.75" font-family="Arial" font-size="15.00" fill="#cbd5e1">Managed by Planning &amp; Control</text>
</g>
<!-- azure_bastion_jump_host&#45;&gt;network_security_groups -->
<!-- azure_monitor&#45;&gt;azure_private_dns_zone -->
<!-- entra_id&#45;&gt;aks_cluster -->
<g id="edge10" class="edge">
<title>entra_id&#45;&gt;aks_cluster</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1016,-968.47C1016,-927.27 1016,-878.16 1016,-835.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1018.63,-835.96 1016,-828.46 1013.38,-835.96 1018.63,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1016,-885.6 1016,-908.4 1106,-908.4 1106,-885.6 1016,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1019" y="-892.1" font-family="Arial" font-size="14.00" fill="#c6c6c6">Authenticates</text>
</g>
<!-- entra_id&#45;&gt;github_runner -->
<g id="edge9" class="edge">
<title>entra_id&#45;&gt;github_runner</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1175.75,-1015.48C1326.52,-973.94 1557.66,-905.15 1751,-825.6 1752.23,-825.09 1753.46,-824.58 1754.7,-824.07"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1755.56,-826.55 1761.43,-821.19 1753.51,-821.72 1755.56,-826.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1593.29,-885.6 1593.29,-908.4 1683.29,-908.4 1683.29,-885.6 1593.29,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1596.29" y="-892.1" font-family="Arial" font-size="14.00" fill="#c6c6c6">Authenticates</text>
</g>
<!-- aks_cluster&#45;&gt;database -->
<g id="edge11" class="edge">
<title>aks_cluster&#45;&gt;database</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M846.5,-667.42C827.78,-660.04 808.99,-652.65 791,-645.6 627.65,-581.6 585.84,-568.09 423,-502.8 408.48,-496.98 393.44,-490.88 378.36,-484.73"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="379.71,-482.45 371.78,-482.04 377.72,-487.31 379.71,-482.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="631.53,-562.8 631.53,-585.6 719.53,-585.6 719.53,-562.8 631.53,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="634.53" y="-569.3" font-family="Arial" font-size="14.00" fill="#c6c6c6">Read &amp; Write</text>
</g>
<!-- aks_cluster&#45;&gt;azure_nat_gateway -->
<g id="edge12" class="edge">
<title>aks_cluster&#45;&gt;azure_nat_gateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M911.21,-645.67C861.23,-603.25 801.37,-552.45 750.44,-509.22"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="752.39,-507.44 744.98,-504.59 749,-511.44 752.39,-507.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="838.33,-562.8 838.33,-585.6 917.33,-585.6 917.33,-562.8 838.33,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="841.33" y="-569.3" font-family="Arial" font-size="14.00" fill="#c6c6c6">Egresses to</text>
</g>
<!-- aks_cluster&#45;&gt;azure_container_registry -->
<g id="edge13" class="edge">
<title>aks_cluster&#45;&gt;azure_container_registry</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1034.02,-645.67C1042.39,-604.38 1052.36,-555.15 1060.96,-512.7"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1063.48,-513.47 1062.4,-505.6 1058.34,-512.43 1063.48,-513.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1050.45,-562.8 1050.45,-585.6 1169.45,-585.6 1169.45,-562.8 1050.45,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1053.45" y="-569.3" font-family="Arial" font-size="14.00" fill="#c6c6c6">Reads image from</text>
</g>
<!-- azure_nat_gateway&#45;&gt;dagster_ui -->
<g id="edge14" class="edge">
<title>azure_nat_gateway&#45;&gt;dagster_ui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M767.14,-322.86C794.5,-307.35 823.92,-292.95 853,-282.8 1297.02,-127.77 1857.47,-96.65 2133.88,-91.31"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2133.52,-93.94 2140.98,-91.18 2133.43,-88.69 2133.52,-93.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="965.72,-240 965.72,-262.8 1169.72,-262.8 1169.72,-240 965.72,-240"/>
<text xml:space="preserve" text-anchor="start" x="968.72" y="-246.5" font-family="Arial" font-size="14.00" fill="#c6c6c6">Polls Control Plane over HTTPS</text>
</g>
<!-- azure_nat_gateway&#45;&gt;external_data_sources -->
<g id="edge15" class="edge">
<title>azure_nat_gateway&#45;&gt;external_data_sources</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M495.04,-322.87C465.55,-303.62 434.97,-282.96 407,-262.8 373.96,-238.98 339.11,-211.9 307.36,-186.4"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="309.2,-184.52 301.71,-181.86 305.91,-188.61 309.2,-184.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="407,-240 407,-262.8 611,-262.8 611,-240 407,-240"/>
<text xml:space="preserve" text-anchor="start" x="410" y="-246.5" font-family="Arial" font-size="14.00" fill="#c6c6c6">Performs outbouund API calls to</text>
</g>
<!-- azure_nat_gateway&#45;&gt;data_warehouse -->
<g id="edge16" class="edge">
<title>azure_nat_gateway&#45;&gt;data_warehouse</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M638,-322.87C638,-281.67 638,-232.56 638,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="640.63,-190.36 638,-182.86 635.38,-190.36 640.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="638,-240 638,-262.8 836,-262.8 836,-240 638,-240"/>
<text xml:space="preserve" text-anchor="start" x="641" y="-246.5" font-family="Arial" font-size="14.00" fill="#c6c6c6">Sends data to Data Warehouse</text>
</g>
<!-- confluxdb_engineer&#45;&gt;azure_bastion_jump_host -->
<g id="edge3" class="edge">
<title>confluxdb_engineer&#45;&gt;azure_bastion_jump_host</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2144.19,-1383.71C1758,-1368.42 782.24,-1320.12 460.78,-1212.95"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="461.81,-1210.53 453.86,-1210.58 460.11,-1215.49 461.81,-1210.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1035.19,-1332.78 1035.19,-1355.58 1278.19,-1355.58 1278.19,-1332.78 1035.19,-1332.78"/>
<text xml:space="preserve" text-anchor="start" x="1038.19" y="-1339.28" font-family="Arial" font-size="14.00" fill="#c6c6c6">Maintains and expands dataplatform in</text>
</g>
<!-- confluxdb_engineer&#45;&gt;github_repo -->
<g id="edge4" class="edge">
<title>confluxdb_engineer&#45;&gt;github_repo</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2192.12,-1300.73C2168.08,-1281.15 2143,-1260.3 2120,-1240.4 2088.68,-1213.3 2055.32,-1183.05 2025.17,-1155.16"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2027.09,-1153.35 2019.8,-1150.18 2023.52,-1157.2 2027.09,-1153.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2120,-1217.6 2120,-1240.4 2221,-1240.4 2221,-1217.6 2120,-1217.6"/>
<text xml:space="preserve" text-anchor="start" x="2123" y="-1224.1" font-family="Arial" font-size="14.00" fill="#c6c6c6">Pushes code to</text>
</g>
<!-- confluxdb_engineer&#45;&gt;dagster_ui -->
<g id="edge5" class="edge">
<title>confluxdb_engineer&#45;&gt;dagster_ui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2304,-1300.46C2304,-1234.04 2304,-1141.04 2304,-1059.4 2304,-1059.4 2304,-1059.4 2304,-411.8 2304,-337.54 2304,-253.62 2304,-190.24"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2306.63,-190.38 2304,-182.88 2301.38,-190.38 2306.63,-190.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2304,-724.2 2304,-747 2503,-747 2503,-724.2 2304,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="2307" y="-730.7" font-family="Arial" font-size="14.00" fill="#c6c6c6">Controls Dagster Agent through</text>
</g>
<!-- github_repo&#45;&gt;github_runner -->
<g id="edge6" class="edge">
<title>github_repo&#45;&gt;github_runner</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1924,-968.47C1924,-927.27 1924,-878.16 1924,-835.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1926.63,-835.96 1924,-828.46 1921.38,-835.96 1926.63,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1924,-885.6 1924,-908.4 1976,-908.4 1976,-885.6 1924,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1927" y="-892.1" font-family="Arial" font-size="14.00" fill="#c6c6c6">triggers</text>
</g>
<!-- github_runner&#45;&gt;azure_key_vault -->
<g id="edge7" class="edge">
<title>github_runner&#45;&gt;azure_key_vault</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1813.11,-645.67C1760.11,-603.16 1696.62,-552.24 1642.65,-508.96"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1644.61,-507.17 1637.12,-504.52 1641.33,-511.26 1644.61,-507.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1735.99,-562.8 1735.99,-585.6 1929.99,-585.6 1929.99,-562.8 1735.99,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1738.99" y="-569.3" font-family="Arial" font-size="14.00" fill="#c6c6c6">Retrieves runtime secrets from</text>
</g>
<!-- github_runner&#45;&gt;azure_container_registry -->
<g id="edge8" class="edge">
<title>github_runner&#45;&gt;azure_container_registry</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1764.2,-651.23C1759.77,-649.3 1755.37,-647.41 1751,-645.6 1703.34,-625.8 1357.62,-520.12 1309,-502.8 1294.17,-497.51 1278.85,-491.89 1263.5,-486.15"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1264.72,-483.8 1256.78,-483.62 1262.87,-488.71 1264.72,-483.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1565.67,-562.8 1565.67,-585.6 1678.67,-585.6 1678.67,-562.8 1565.67,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1568.67" y="-569.3" font-family="Arial" font-size="14.00" fill="#c6c6c6">Deploys image to</text>
</g>
</g>
</svg>`;default:throw new Error("Unknown viewId: "+e)}}export{t as dotSource,n as svgSource};
