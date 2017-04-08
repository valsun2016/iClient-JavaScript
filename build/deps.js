var deps = {
    "Core": {
        "format": [
            "./src/Core/format/Format.js",
            "./src/Core/format/GeoJSON.js",
            "./src/Core/format/JSON.js"
        ],
        // "iManager" : [],
        // "iPortal":[],
        "iServer": [
            //Data
            "./src/Core/iServer/FieldStatisticService.js",
            "./src/Core/iServer/GetFeaturesByBoundsService.js",
            "./src/Core/iServer/GetFeaturesByBufferService.js",
            "./src/Core/iServer/GetFeaturesByGeometryService.js",
            "./src/Core/iServer/GetFeaturesByIDsService.js",
            "./src/Core/iServer/GetFeaturesBySQLService.js",
            "./src/Core/iServer/GetFieldsService.js",
            "./src/Core/iServer/GetGridCellInfosService.js",
            "./src/Core/iServer/EditFeaturesService.js",
            //Map
            "./src/Core/iServer/GetLayersInfoService.js",
            "./src/Core/iServer/MapService.js",
            "./src/Core/iServer/ChartQueryService.js",
            "./src/Core/iServer/QueryByDistanceService.js",
            "./src/Core/iServer/QueryByGeometryService.js",
            "./src/Core/iServer/QueryBySQLService.js",
            "./src/Core/iServer/QueryByBoundsService.js",
            "./src/Core/iServer/TilesetsService.js",
            "./src/Core/iServer/MeasureService.js",
            "./src/Core/iServer/ChartFeatureInfoSpecsService.js",
            "./src/Core/iServer/SetLayerInfoService.js",
            "./src/Core/iServer/SetLayersInfoService.js",
            "./src/Core/iServer/SetLayerStatusService.js",
            //ThemeService
            "./src/Core/iServer/ThemeService.js",
            //NetworkAnalyst
            "./src/Core/iServer/BurstPipelineAnalystService.js",
            "./src/Core/iServer/ComputeWeightMatrixService.js",
            "./src/Core/iServer/FacilityAnalystStreamService.js",
            "./src/Core/iServer/FindClosestFacilitiesService.js",
            "./src/Core/iServer/FindLocationService.js",
            "./src/Core/iServer/FindMTSPPathsService.js",
            "./src/Core/iServer/FindPathService.js",
            "./src/Core/iServer/FindServiceAreasService.js",
            "./src/Core/iServer/FindTSPPathsService.js",
            "./src/Core/iServer/UpdateEdgeWeightService.js",
            "./src/Core/iServer/UpdateTurnNodeWeightService.js",
            //NetworkAnalyst3D
            "./src/Core/iServer/FacilityAnalystSinks3DService.js",
            "./src/Core/iServer/FacilityAnalystSources3DService.js",
            "./src/Core/iServer/FacilityAnalystTracedown3DService.js",
            "./src/Core/iServer/FacilityAnalystTraceup3DService.js",
            "./src/Core/iServer/FacilityAnalystUpstream3DService.js",
            //TrafficTransferAnalyst
            "./src/Core/iServer/StopQueryService.js",
            "./src/Core/iServer/TransferPathService.js",
            "./src/Core/iServer/TransferSolutionService.js",
            //SpatialAnalyst
            "./src/Core/iServer/AreaSolarRadiationService.js",
            "./src/Core/iServer/BufferAnalystService.js",
            "./src/Core/iServer/DensityAnalystService.js",
            "./src/Core/iServer/GenerateSpatialDataService.js",
            "./src/Core/iServer/GeoRelationAnalystService.js",
            "./src/Core/iServer/InterpolationAnalystService.js",
            "./src/Core/iServer/MathExpressionAnalysisService.js",
            "./src/Core/iServer/OverlayAnalystService.js",
            "./src/Core/iServer/RouteCalculateMeasureService.js",
            "./src/Core/iServer/RouteLocatorService.js",
            "./src/Core/iServer/SurfaceAnalystService.js",
            "./src/Core/iServer/TerrainCurvatureCalculationService.js",
            "./src/Core/iServer/ThiessenAnalystService.js"

        ],
        // "online" : []
    },
    "Leaflet": {
        "OGC": {
            "title": "OGC",
            "description": "--对接OGC标准服务",
            "WMTS": {
                "name": "WMTS服务",
                "src": ["./src/Leaflet/OGC/TileLayer.WMTS.js"]
            },
            "WMS": {
                "name": "WMS服务",
                "src": []
            },
        },
        "mapping": {
            "title": "互联网地图",
            "description": "--对接互联网地图",
            "Baidu": {
                "name": "百度图层",
                "src": ['./src/Leaflet/mapping/BaiduTileLayer.js']
            },
            "Cloud": {
                "name": "SuperMap 云图层",
                "src": ['./src/Leaflet/mapping/CloudTileLayer.js']
            }
        },
        "SuperMap": {
            "title": "SuperMap",
            "description": "--对接SuperMap服务",
            "Map": {
                "name": "地图服务",
                "src": [
                    "./src/Leaflet/SuperMap/iServer/TiledMapLayer.js",
                    "./src/Leaflet/SuperMap/iServer/MapService.js",
                    "./src/Leaflet/SuperMap/iServer/QueryService.js",
                    "./src/Leaflet/SuperMap/iServer/ChartQueryService.js",
                    "./src/Leaflet/SuperMap/iServer/TilesetsService.js",
                    "./src/Leaflet/SuperMap/iServer/GetLayersInfoService.js",
                    "./src/Leaflet/SuperMap/iServer/ChartFeatureInfoSpecsService.js",
                    "./src/Leaflet/SuperMap/iServer/SetLayerService.js",
                    "./src/Leaflet/SuperMap/iServer/MeasureService.js"
                ]
            },
            "Data": {
                "name": "数据服务",
                "src": [
                    "./src/Leaflet/SuperMap/iServer/FieldStatisticService.js",
                    "./src/Leaflet/SuperMap/iServer/GetFeaturesService.js",
                    "./src/Leaflet/SuperMap/iServer/GetFieldsService.js",
                    "./src/Leaflet/SuperMap/iServer/EditFeaturesService.js",
                    "./src/Leaflet/SuperMap/iServer/GetGridCellInfosService.js"
                ]
            },
            "Theme": {
                "name": "服务器专题图服务",
                "src": [
                    "./src/Leaflet/SuperMap/iServer/ThemeService.js"
                ]
            },
            "NetworkAnalyst": {
                "name": "网络分析服务",
                "src": [
                    "./src/Leaflet/SuperMap/iServer/NetworkAnalystService.js"
                ]
            },
            "NetworkAnalyst3D": {
                "name": "3D网络分析服务",
                "src": [
                    "./src/Leaflet/SuperMap/iServer/NetworkAnalyst3DService.js"
                ]
            },
            "SpatialAnalyst": {
                "name": "空间分析服务",
                "src": [
                    "./src/Leaflet/SuperMap/iServer/SpatialAnalystService.js"
                ]
            },
            "TrafficTransferAnalyst": {
                "name": "交通换乘分析服务",
                "src": [
                    "./src/Leaflet/SuperMap/iServer/TrafficTransferAnalystService.js"
                ]
            },
            "iPortal": {
                "name": "webmap",
                "src": [
                    "./src/Leaflet/SuperMap/iPortal/WebMap.js"
                ]
            },
        },
        "Visual": {
            "title": "Visual",
            "description": "--可视化",
            "EChartMapLayer": {
                "name": "ECharts地图图层",
                "src": [
                    "./src/Leaflet/Visual/EChartMapLayer.js"
                ]
            },
            "GraphicLayer": {
                "name": "高效率点图层",
                "src": [
                    "./src/Leaflet/Visual/Graphic/Graphic.js",
                    "./src/Leaflet/Visual/Graphic/GraphicGroup.js",
                    "./src/Leaflet/Visual/Graphic/CircleStyle.js"
                ]
            }
            // "AnimatorVector": {
            //     "name": "时空数据图层",
            //     "src": [
            //         "./src/Leaflet/Visual/AnimatorVector.js"
            //     ]
            // },
            // "HeatGridLayer": {
            //     "name": "热点格网图层",
            //     "src": [
            //         "./src/Leaflet/Visual/HeatGridLayer.js"
            //     ]
            // },
            // "HeatMapLayer": {
            //     "name": "热点图层",
            //     "src": [
            //         "./src/Leaflet/Visual/HeatMapLayer.js"
            //     ]
            // },
            // "VectorLayer": {
            //     "name": "矢量图层",
            //     "src": [
            //         "./src/Leaflet/Visual/VectorLayer.js"
            //     ]
            // }
        }
    },
    "OL3": {
        "OGC": {
            "title": "OGC",
            "description": "--对接OGC标准服务"
        },
        "SuperMap": {
            "title": "SuperMap",
            "description": "--对接SuperMap服务",
            "Map": {
                "name": "地图服务",
                "src": [
                    "./src/OL3/SuperMap/iServer/TileSuperMapRest.js",
                    "./src/OL3/SuperMap/iServer/MapService.js",
                    "./src/OL3/SuperMap/iServer/QueryService.js",
                    "./src/OL3/SuperMap/iServer/ChartQueryService.js",
                    "./src/OL3/SuperMap/iServer/TilesetsService.js",
                    "./src/OL3/SuperMap/iServer/GetLayersInfoService.js",
                    "./src/OL3/SuperMap/iServer/ChartFeatureInfoSpecsService.js",
                    "./src/OL3/SuperMap/iServer/SetLayerService.js",
                    "./src/OL3/SuperMap/iServer/MeasureService.js"
                ]
            },
            "Data": {
                "name": "数据服务",
                "src": [
                    "./src/OL3/SuperMap/iServer/FieldStatisticService.js",
                    "./src/OL3/SuperMap/iServer/GetFeaturesService.js",
                    "./src/OL3/SuperMap/iServer/GetFieldsService.js",
                    "./src/OL3/SuperMap/iServer/EditFeaturesService.js",
                    "./src/OL3/SuperMap/iServer/GetGridCellInfosService.js"
                ]
            },
            "Theme": {
                "name": "服务器专题图服务",
                "src": [
                    "./src/OL3/SuperMap/iServer/ThemeService.js"
                ]
            },
            "NetworkAnalyst": {
                "name": "网络分析服务",
                "src": [
                    "./src/OL3/SuperMap/iServer/NetworkAnalystService.js"
                ]
            },
            "NetworkAnalyst3D": {
                "name": "3D网络分析服务",
                "src": [
                    "./src/OL3/SuperMap/iServer/NetworkAnalyst3DService.js"
                ]
            },
            "SpatialAnalyst": {
                "name": "空间分析服务",
                "src": [
                    "./src/OL3/SuperMap/iServer/SpatialAnalystService.js"
                ]
            },
            "TrafficTransferAnalyst": {
                "name": "交通换乘分析服务",
                "src": [
                    "./src/OL3/SuperMap/iServer/TrafficTransferAnalystService.js"
                ]
            }
        },
        "Visual": {
            "title": "Visual",
            "description": "--可视化",
            // "AnimatorVector": {
            //     "name": "时空数据图层",
            //     "src": [
            //         "./src/OL3/Visual/AnimatorVector.js"
            //     ]
            // },
            // "HeatGridLayer": {
            //     "name": "热点格网图层",
            //     "src": [
            //         "./src/OL3/Visual/HeatGridLayer.js"
            //     ]
            // },
            // "HeatMapLayer": {
            //     "name": "热点图层",
            //     "src": [
            //         "./src/OL3/Visual/HeatMapLayer.js"
            //     ]
            // },
            // "VectorLayer": {
            //     "name": "矢量图层",
            //     "src": [
            //         "./src/OL3/Visual/VectorLayer.js"
            //     ]
            // }
            "GraphicLayer": {
                "name": "高效率点图层",
                "src": [
                    "./src/OL3/Visual/Graphic/graphic.js",
                    "./src/OL3/Visual/Graphic/source/graphic.js"
                ]
            }
        }
    }
}
module.exports = deps;