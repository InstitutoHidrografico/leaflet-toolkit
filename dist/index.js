import 'leaflet/dist/leaflet.css';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { __awaiter } from 'tslib';
import * as L from 'leaflet';
import { useState, useRef, useEffect, useCallback } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$4 = ".cards{align-items:center;bottom:5%;display:flex;gap:0;justify-content:center;left:50%;margin:0 auto;overflow:visible;position:absolute;transform:translateX(-50%);transform-style:preserve-3d;z-index:1000}.card-wrapper{perspective:800px;position:relative;transition:transform .3s ease}.card{backdrop-filter:blur(10px);background-color:rgba(68,68,68,.8);border-radius:.3rem;box-shadow:0 7px 13px 3px rgba(0,0,0,.6),inset -23px -5px 33px 22px rgba(0,0,0,.43);color:#fff;cursor:pointer;height:10rem;margin:0 -45px;position:relative;transform:rotateY(45deg);transition:all .5s ease;width:8rem}.card-wrapper:before{background-color:rgba(0,0,0,.6);border-radius:100%;bottom:0;content:\"\";filter:blur(2rem);height:100%;left:0;opacity:.7;position:absolute;transform:translateY(60%) rotateX(90deg) scale(.8);transition:opacity .3s ease;width:100%}.cards .card:hover{box-shadow:inset 2px -1px 23px -1px rgba(0,0,0,.62),0 8px 25px rgba(0,0,0,.4);margin:0 1.5rem;transform:rotate(0deg) translateY(-.5rem)!important;z-index:1001}.card-wrapper:hover:before{opacity:.4}.card button{background:hsla(0,0%,100%,.2);border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:.8rem;height:1.5rem;left:.3rem;position:absolute;top:.3rem;transition:all .2s ease;width:1.5rem;z-index:2}.card button:hover{background:hsla(0,0%,100%,.4);transform:scale(1.1)}.card-remove-button{background:hsla(0,0%,100%,.2);border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:.8rem;height:1.5rem;left:.3rem;position:absolute;top:.3rem;transition:all .2s ease;width:1.5rem;z-index:2}.card-remove-button:hover{background:hsla(0,0%,100%,.4);transform:scale(1.1)}.card-image{padding:1rem}.card .img,.card-image{filter:brightness(.9);height:60%;object-fit:contain;position:absolute;transition:all .2s ease-in-out;z-index:1}.card:hover .img{animation:float 3s ease-in-out infinite;filter:blur(3px) brightness(.7)}@keyframes float{0%,to{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10%) rotate(5deg)}}.card .content{align-items:center;bottom:0;display:flex;flex-direction:column;height:85%;justify-content:flex-end;padding-bottom:1rem;position:absolute;transform:scale(0);transition:transform .5s ease;width:100%}.card .title,.card:hover .content{transform:scale(1)}.card .title{padding:.5rem;text-align:center;transition:transform .5s ease}.card:hover .title{transform:translateY(3rem)}@media (max-width:768px){.cards{bottom:2%}.card{height:8rem;margin:0 -35px;width:6rem}.cards .card:hover{margin:0 1rem}}@media (max-width:480px){.cards{bottom:1%}.card{height:6rem;margin:0 -25px;width:4.5rem}.cards .card:hover{margin:0 .5rem}.card .content{font-size:.8rem}}";
styleInject(css_248z$4);

var css_248z$3 = "@import \"./globals.css\";@import \"./map.css\";@import \"./menu.css\";@import \"./cards.css\";.sr-only{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.visually-hidden{clip:rect(0,0,0,0)!important;border:0!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:rgba(0,0,0,.1)}::-webkit-scrollbar-thumb{background:rgba(0,0,0,.3);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.5)}";
styleInject(css_248z$3);

var css_248z$2 = ".map-container{height:100vh;position:relative;width:100%}#map{height:100vh;width:100vw}.distance-label{background:transparent;border:none}.distance-label span{background-color:hsla(0,0%,100%,.9);border:1px solid #333;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.3);color:#333;font-size:12px;font-weight:700;padding:2px 6px;white-space:nowrap}.route-drawing-banner{align-items:center;backdrop-filter:blur(10px);background:rgba(51,136,255,.95);border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.3);color:#fff;display:flex;font-size:14px;font-weight:500;gap:8px;left:50%;padding:12px 20px;position:absolute;top:20px;transform:translateX(-50%);z-index:1000}.banner-icon{font-size:18px}.banner-text{white-space:nowrap}";
styleInject(css_248z$2);

var css_248z$1 = ".menu{bottom:50%;position:absolute;transform:translateY(50%);width:2rem;z-index:1000}.menu ul{list-style:none}.menuitem{align-items:center;display:flex;flex-direction:column;justify-content:center}.menuitem .icon-content{padding:.2rem;position:relative}.menuitem .icon-content .tooltip{border-radius:5px;color:#fff;font-size:14px;left:100%;opacity:0;padding:6px 10px;position:absolute;top:100%;transform:translateY(230%);transition:all .3s ease;visibility:hidden;white-space:nowrap;z-index:1001}.menuitem .icon-content:hover .tooltip{opacity:1;top:-50px;visibility:visible}.menuitem .icon-content a{align-items:center;background-color:hsla(0,0%,100%,.9);border-radius:50%;box-shadow:0 5px 15px rgba(0,0,0,.35),5px 10px 15px rgba(0,73,144,.5);color:#4d4d4d;cursor:pointer;display:flex;height:50px;justify-content:center;overflow:hidden;position:relative;transition:all .3s ease-in-out;width:50px}.menuitem .icon-content a svg{height:30px;position:relative;width:30px;z-index:1}.menuitem .icon-content a:hover{color:#fff;transform:translateY(-2px)}.menuitem .icon-content a .filled{background-color:#000;bottom:0;height:0;left:0;position:absolute;top:auto;transition:all .3s ease-in-out;width:100%}.menuitem .icon-content a:hover .filled{height:100%}.menuitem .icon-content a[data-social=marker] .filled,.menuitem .icon-content a[data-social=marker]~.tooltip{background-color:#1b998b}.menuitem .icon-content a[data-social=line] .filled,.menuitem .icon-content a[data-social=line]~.tooltip{background-color:#788bff}.menuitem .icon-content a[data-social=polygon] .filled,.menuitem .icon-content a[data-social=polygon]~.tooltip{background-color:#467599}.menuitem .icon-content a[data-social=overlay] .filled,.menuitem .icon-content a[data-social=overlay]~.tooltip{background-color:#1d3354}.active-route{position:relative}.active-route a{box-shadow:0 5px 15px rgba(0,0,0,.35),0 0 20px rgba(51,136,255,.8)}.route-badge{background:#38f;border:2px solid #fff;border-radius:50%;font-size:12px;height:20px;pointer-events:none;right:5px;top:5px;width:20px;z-index:2}.cancel-button,.route-badge{align-items:center;color:#fff;display:flex;font-weight:700;justify-content:center;position:absolute}.cancel-button{background:#f44;border:none;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.3);cursor:pointer;font-size:14px;height:22px;left:-5px;pointer-events:auto;top:-5px;transition:all .2s ease;width:22px;z-index:10}.cancel-button:hover{background:#f22;transform:scale(1.1)}.nav-bottom{align-items:center;backdrop-filter:blur(12px);background:hsla(0,0%,100%,.1);border-radius:1rem;bottom:1rem;box-shadow:0 6px 18px rgba(0,0,0,.3);display:flex;gap:1rem;height:6rem;left:50%;padding:.5rem 1rem;position:absolute;transform:translateX(-50%);width:50%}.feat{z-index:2000}.feat div{align-items:center;background:linear-gradient(135deg,#3a7bd5,#3a6073);border-radius:.7rem;box-shadow:0 4px 12px rgba(0,0,0,.25);color:#fff;cursor:pointer;display:flex;font-size:1rem;font-weight:600;height:6rem;justify-content:center;margin-left:-4rem;position:relative;transform:perspective(800px) rotateY(50deg);transition:transform .3s ease,box-shadow .3s ease;transition:1s;width:6rem}.feat div:hover{box-shadow:0 8px 20px rgba(0,0,0,.4);transform:translateY(-6px) rotateY(0deg)}.feat div button{background:hsla(0,0%,100%,.2);border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:.8rem;height:1.5rem;left:.3rem;position:absolute;top:.3rem;transition:background .2s ease;width:1.5rem}.feat div button:hover{background:hsla(0,0%,100%,.4)}.file-input{display:none}.menu-link{align-items:center;background-color:hsla(0,0%,100%,.9);border-radius:50%;box-shadow:0 5px 15px rgba(0,0,0,.35),5px 10px 15px rgba(0,73,144,.5);color:#4d4d4d;cursor:pointer;display:flex;height:50px;justify-content:center;overflow:hidden;position:relative;text-decoration:none;transition:all .3s ease-in-out;width:50px}.menu-link:hover{color:#fff;transform:translateY(-2px)}.menuitem .icon-content a[data-social=route] .filled,.menuitem .icon-content a[data-social=route]~.tooltip{background-color:#38f}";
styleInject(css_248z$1);

var css_248z = "body{margin:0}#map{height:100vh;width:100vw}";
styleInject(css_248z);

var logo = "data:image/png;base64,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";

const Card = ({ map, layers, toggleFromMap }) => {
    return (jsx("div", { className: "cards", children: layers.map((feature, index) => (jsx(CardItem, { feature: feature, map: map, toggleFromMap: toggleFromMap }, index))) }));
};
const CardItem = ({ feature, map, toggleFromMap }) => {
    const handleRemove = () => {
        if (map) {
            toggleFromMap(feature);
        }
    };
    return (jsx("div", { className: "card-wrapper", children: jsxs("div", { className: "card", children: [jsx("button", { className: "card-remove-button", onClick: handleRemove, "aria-label": "Remove layer", type: "button", children: "\u2716" }), jsx("img", { className: "card-image", src: logo, alt: "Layer icon" }), jsx("div", { className: "card-content" }), jsx("div", { className: "card-title" })] }) }));
};

const HandleInputFile = (_a) => __awaiter(void 0, [_a], void 0, function* ({ event, toggleFromMap, addMarkers, addPolygon, addPolyline, addOverlay }) {
    var _b;
    const file = (_b = event.target.files) === null || _b === void 0 ? void 0 : _b[0];
    if (!file)
        return [];
    const [swLat, swLng, neLat, neLng] = file.name.replace(/\.[^/.]+$/, "").split("_").map(parseFloat);
    if (addOverlay && !isNaN(swLat) && !isNaN(swLng) && !isNaN(neLat) && !isNaN(neLng)) {
        const sw = L.latLng(swLat, swLng);
        const ne = L.latLng(neLat, neLng);
        addOverlay && toggleFromMap(addOverlay(sw, ne, file));
    }
    try {
        const text = yield file.text();
        const coords = text
            .split(/\r?\n/) // separa linhas
            .map(line => line.trim()) // remove espaços em branco no início e fim da string
            .filter(line => line.length > 0) // ignora linhas vazias
            .map(line => {
            const [lat, lng] = line.split(/\s+/).map(parseFloat); // separa lat e lng por espaço
            return !isNaN(lat) && !isNaN(lng) ? L.latLng(lat, lng) : null;
        })
            .filter((coord) => coord !== null);
        addMarkers && toggleFromMap(addMarkers(coords));
        addPolygon && toggleFromMap(addPolygon(coords));
        addPolyline && toggleFromMap(addPolyline(coords));
        return coords;
    }
    catch (error) {
        return [];
    }
});

const MAP_CONFIG = {
    center: L.latLng(-22.8, -43),
    zoom: 11,
    tileLayer: {
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        options: {
            attribution: "Tiles &copy; Esri &mdash; Sources: Esri, Maxar, Earthstar, etc.",
            className: "map-tiles",
            minZoom: 2,
        }
    }
};
const createRouteMarker = (point) => {
    return L.marker([point.lat, point.lng], {
        icon: L.divIcon({
        // className: "route-point-marker",
        // html: '<div style="background: #3388ff; width: 10px; height: 10px; border-radius: 50%; border: 2px solid white;"></div>',
        // iconSize: [10, 10],
        })
    });
};
const createTempPolyline = (points) => {
    return L.polyline(points.map(p => [p.lat, p.lng]), {
        color: '#3388ff',
        weight: 3,
        dashArray: '5, 10',
    });
};
const addDistanceTooltips = (group, points) => {
    for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const distanceNM = p1.distanceTo(p2) / 1852;
        const mid = L.latLng((p1.lat + p2.lat) / 2, (p1.lng + p2.lng) / 2);
        const label = L.marker(mid, {
            icon: L.divIcon({
                className: "distance-label",
                html: `<span>${distanceNM.toFixed(2)} NM</span>`,
                iconSize: [0, 0],
            }),
        });
        group.addLayer(label);
    }
};
const useMap = () => {
    const [map, setMap] = useState();
    const [layers, setLayers] = useState([]);
    const [isDrawingRoute, setIsDrawingRoute] = useState(false);
    const [routePoints, setRoutePoints] = useState([]);
    const tempRouteLayerRef = useRef(null);
    const clickHandlerRef = useRef(null);
    useEffect(() => {
        if (map)
            return;
        const initializeMap = () => {
            const mapInstance = L.map("map").setView(MAP_CONFIG.center, MAP_CONFIG.zoom);
            L.tileLayer(MAP_CONFIG.tileLayer.url, MAP_CONFIG.tileLayer.options).addTo(mapInstance);
            return mapInstance;
        };
        const mapInstance = initializeMap();
        setMap(mapInstance);
        return () => {
            mapInstance.remove();
        };
    }, []);
    const createLayer = useCallback((elements) => {
        const group = L.featureGroup(elements);
        setLayers(prev => [...prev, group]);
        return group;
    }, []);
    const addMarkers = useCallback((points) => {
        const markers = points.map(point => L.marker([point.lat, point.lng]));
        return createLayer(markers);
    }, [createLayer]);
    const addPolygon = useCallback((points) => {
        const polygon = [L.polygon(points.map(point => [point.lat, point.lng]))];
        return createLayer(polygon);
    }, [createLayer]);
    const addPolyline = useCallback((points) => {
        const polyline = L.polyline(points.map(p => [p.lat, p.lng]));
        const group = createLayer([polyline]);
        addDistanceTooltips(group, points);
        return group;
    }, [createLayer]);
    const addOverlay = useCallback((sw, ne, file) => {
        const url = URL.createObjectURL(file);
        const overlay = L.imageOverlay(url, L.latLngBounds(sw, ne), {
            opacity: 0.6,
            errorOverlayUrl: "https://cdn-icons-png.flaticon.com/512/110/110686.png",
            alt: "Overlay image",
        });
        return createLayer([overlay]);
    }, [createLayer]);
    const cleanupRouteDrawing = useCallback((mapInstance) => {
        if (clickHandlerRef.current) {
            mapInstance.off('click', clickHandlerRef.current);
            clickHandlerRef.current = null;
        }
        mapInstance.getContainer().style.cursor = '';
        if (tempRouteLayerRef.current) {
            try {
                mapInstance.removeLayer(tempRouteLayerRef.current);
            }
            catch (e) {
                console.error("Erro ao remover layer:", e);
            }
            tempRouteLayerRef.current = null;
        }
    }, []);
    const cancelDrawingRoute = useCallback(() => {
        if (!map)
            return;
        cleanupRouteDrawing(map);
        setIsDrawingRoute(false);
        setRoutePoints([]);
    }, [map, cleanupRouteDrawing]);
    const toggleFromMap = useCallback((layer) => {
        if (!map)
            return;
        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
            setLayers(prev => prev.filter(l => l !== layer));
            if (isDrawingRoute) {
                cancelDrawingRoute();
            }
        }
        else {
            map.addLayer(layer);
            if (layer.getBounds) {
                map.fitBounds(layer.getBounds());
            }
        }
    }, [map, isDrawingRoute, cancelDrawingRoute]);
    const updateTempRoute = useCallback((points) => {
        if (!map)
            return;
        if (tempRouteLayerRef.current) {
            map.removeLayer(tempRouteLayerRef.current);
        }
        if (points.length === 0) {
            tempRouteLayerRef.current = null;
            return;
        }
        const tempGroup = L.featureGroup();
        points.forEach(point => {
            tempGroup.addLayer(createRouteMarker(point));
        });
        if (points.length >= 2) {
            tempGroup.addLayer(createTempPolyline(points));
        }
        tempGroup.addTo(map);
        tempRouteLayerRef.current = tempGroup;
    }, [map]);
    const startDrawingRoute = useCallback(() => {
        if (!map)
            return;
        setIsDrawingRoute(true);
        setRoutePoints([]);
        map.getContainer().style.cursor = 'crosshair';
        const onMapClick = (e) => {
            setRoutePoints(prev => {
                const newPoints = [...prev, e.latlng];
                updateTempRoute(newPoints);
                return newPoints;
            });
        };
        clickHandlerRef.current = onMapClick;
        map.on('click', onMapClick);
    }, [map, updateTempRoute]);
    const finishDrawingRoute = useCallback(() => {
        if (!map || routePoints.length < 2) {
            return null;
        }
        cleanupRouteDrawing(map);
        // Cria polyline definitiva
        const routeLayer = addPolyline(routePoints);
        // Adiciona automaticamente ao mapa e ajusta visualização
        map.addLayer(routeLayer);
        if (routeLayer.getBounds) {
            map.fitBounds(routeLayer.getBounds());
        }
        // Reset estado
        setIsDrawingRoute(false);
        setRoutePoints([]);
        return routeLayer;
    }, [map, routePoints, cleanupRouteDrawing, addPolyline]);
    return {
        map,
        layers,
        createLayer,
        addMarkers,
        addPolygon,
        addPolyline,
        addOverlay,
        toggleFromMap,
        startDrawingRoute,
        finishDrawingRoute,
        cancelDrawingRoute,
        isDrawingRoute,
        routePoints,
    };
};

const Menu = ({ map, toggleFromMap, addMarkers, addPolyline, addPolygon, addOverlay, startDrawingRoute, finishDrawingRoute, cancelDrawingRoute, isDrawingRoute = false, routePoints = [] }) => {
    const handleRouteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isDrawingRoute) {
            startDrawingRoute === null || startDrawingRoute === void 0 ? void 0 : startDrawingRoute();
        }
        else if (routePoints.length >= 2) {
            finishDrawingRoute === null || finishDrawingRoute === void 0 ? void 0 : finishDrawingRoute();
        }
    };
    const handleRouteCancelClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        cancelDrawingRoute === null || cancelDrawingRoute === void 0 ? void 0 : cancelDrawingRoute();
    };
    const menuItems = [
        {
            id: "marker",
            label: "Marker",
            icon: jsx(MarkerIcon, {}),
            fileInputId: "fileInputMarker",
            handler: (event) => map && HandleInputFile({ event, map, toggleFromMap, addMarkers })
        },
        {
            id: "line",
            label: "Line",
            icon: jsx(LineIcon, {}),
            fileInputId: "fileInputPolyline",
            handler: (event) => map && HandleInputFile({ event, map, toggleFromMap, addPolyline })
        },
        {
            id: "polygon",
            label: "Polygon",
            icon: jsx(PolygonIcon, {}),
            fileInputId: "fileInputPolygon",
            handler: (event) => map && HandleInputFile({ event, map, toggleFromMap, addPolygon })
        },
        {
            id: "overlay",
            label: "Overlay",
            icon: jsx(OverlayIcon, {}),
            fileInputId: "fileInputOverlay",
            handler: (event) => map && HandleInputFile({ event, map, toggleFromMap, addOverlay })
        },
        {
            id: "route",
            label: getRouteTooltip(isDrawingRoute, routePoints.length),
            icon: jsx(RouteIcon, {}),
            fileInputId: "",
            onClick: handleRouteClick,
            isActive: isDrawingRoute,
            badge: isDrawingRoute ? routePoints.length : undefined
        }
    ];
    return (jsx("nav", { className: "menu", children: jsx("ul", { className: "menuitem", children: menuItems.map((item) => (jsx(MenuItemComponent, { item: item, showCancelButton: item.id === "route" && isDrawingRoute, onCancel: handleRouteCancelClick }, item.id))) }) }));
};
const MenuItemComponent = ({ item, showCancelButton, onCancel }) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (item.onClick) {
            item.onClick(e);
        }
        else if (item.handler) {
            const fileInput = document.getElementById(item.fileInputId);
            fileInput === null || fileInput === void 0 ? void 0 : fileInput.click();
        }
    };
    return (jsxs("li", { className: `icon-content ${item.isActive ? 'active-route' : ''}`, children: [item.handler && (jsx("input", { id: item.fileInputId, type: "file", className: "file-input", onChange: item.handler })), jsxs("a", { href: "#", "aria-label": item.label, "data-social": item.id, onClick: handleClick, className: "menu-link", children: [jsx("div", { className: "filled" }), item.icon, item.badge && item.badge > 0 && (jsx(RouteBadge, { count: item.badge }))] }), jsx("div", { className: "tooltip", children: item.label }), showCancelButton && (jsx(CancelButton, { onClick: onCancel }))] }));
};
const MarkerIcon = () => (jsx("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", children: jsxs("g", { id: "Layer_88", "data-name": "Layer 88", children: [jsx("path", { d: "M32,2.5c-10.89,0-19.75,9.35-19.75,20.85,0,11,17.77,36.44,18.52,37.51a1.51,1.51,0,0,0,2.46,0C34,59.79,51.75,34.39,51.75,23.35,51.75,11.85,42.89,2.5,32,2.5Zm0,54.85c-4.05-6-16.75-25.47-16.75-34C15.25,13.51,22.76,5.5,32,5.5s16.75,8,16.75,17.85C48.75,31.88,36.05,51.35,32,57.35Z" }), jsx("path", { d: "M32,11.13A12.24,12.24,0,0,0,19.77,23.35c.68,16.22,23.79,16.22,24.46,0A12.24,12.24,0,0,0,32,11.13Zm0,21.45a9.24,9.24,0,0,1-9.23-9.23c.5-12.23,18-12.23,18.46,0A9.24,9.24,0,0,1,32,32.58Z" })] }) }));
const LineIcon = () => (jsxs("svg", { fill: "currentColor", version: "1.0", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "64px", height: "64px", viewBox: "0 0 64 64", enableBackground: "new 0 0 64 64", children: [jsx("rect", { x: "1", y: "53", fill: "currentColor", stroke: "#000000", strokeWidth: "2", strokeMiterlimit: "10", width: "10", height: "10" }), jsx("rect", { x: "53", y: "1", fill: "currentColor", stroke: "#000000", strokeWidth: "2", strokeMiterlimit: "10", width: "10", height: "10" }), jsx("line", { fill: "currentColor", stroke: "#000000", strokeWidth: "2", strokeMiterlimit: "10", x1: "11", y1: "53", x2: "53", y2: "11" })] }));
const PolygonIcon = () => (jsxs("svg", { width: "800px", height: "800px", viewBox: "0 0 48 48", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14 40C15.1046 40 16 39.1046 16 38C16 36.8954 15.1046 36 14 36C12.8954 36 12 36.8954 12 38C12 39.1046 12.8954 40 14 40ZM14 42C16.2091 42 18 40.2091 18 38C18 35.7909 16.2091 34 14 34C11.7909 34 10 35.7909 10 38C10 40.2091 11.7909 42 14 42Z", fill: "currentColor" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22ZM10 24C12.2091 24 14 22.2091 14 20C14 17.7909 12.2091 16 10 16C7.79086 16 6 17.7909 6 20C6 22.2091 7.79086 24 10 24Z", fill: "currentColor" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38 22C39.1046 22 40 21.1046 40 20C40 18.8954 39.1046 18 38 18C36.8954 18 36 18.8954 36 20C36 21.1046 36.8954 22 38 22ZM38 24C40.2091 24 42 22.2091 42 20C42 17.7909 40.2091 16 38 16C35.7909 16 34 17.7909 34 20C34 22.2091 35.7909 24 38 24Z", fill: "currentColor" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34 40C35.1046 40 36 39.1046 36 38C36 36.8954 35.1046 36 34 36C32.8954 36 32 36.8954 32 38C32 39.1046 32.8954 40 34 40ZM34 42C36.2091 42 38 40.2091 38 38C38 35.7909 36.2091 34 34 34C31.7909 34 30 35.7909 30 38C30 40.2091 31.7909 42 34 42Z", fill: "currentColor" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 12C25.1046 12 26 11.1046 26 10C26 8.89543 25.1046 8 24 8C22.8954 8 22 8.89543 22 10C22 11.1046 22.8954 12 24 12ZM24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z", fill: "currentColor" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.9188 19.028L25.9188 12.5995L27.0812 10.972L36.0812 17.4006L34.9188 19.028ZM21.7844 12.8115L13.0812 19.028L11.9188 17.4006L20.622 11.184L21.7844 12.8115ZM11.6429 22.7831L14.3095 34.7831L12.3572 35.2169L9.69049 23.2169L11.6429 22.7831ZM33.6905 34.7831L36.246 23.2831L38.1984 23.7169L35.6429 35.2169L33.6905 34.7831ZM17 37H31V39H17V37Z", fill: "currentColor" })] }));
const OverlayIcon = () => (jsx("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", children: jsx("rect", { x: "10", y: "10", width: "44", height: "44", stroke: "black", fill: "currentColor" }) }));
const RouteIcon = () => (jsx("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "64", height: "64", children: jsx("path", { d: "M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" }) }));
const RouteBadge = ({ count }) => (jsx("span", { className: "route-badge", children: count }));
const CancelButton = ({ onClick }) => (jsx("button", { onClick: onClick, className: "cancel-button", title: "Cancel route", type: "button", children: "\u2715" }));
const getRouteTooltip = (isDrawing, pointsCount) => {
    if (!isDrawing)
        return 'Draw Route';
    return pointsCount >= 2 ? 'Click to Finish' : `Points: ${pointsCount}`;
};

const Map = () => {
    const { map, layers, addMarkers, addPolyline, addPolygon, addOverlay, toggleFromMap, startDrawingRoute, finishDrawingRoute, cancelDrawingRoute, isDrawingRoute, routePoints, } = useMap();
    return (jsxs("div", { className: "map-container", children: [jsx("div", { id: "map" }), map && (jsxs(Fragment, { children: [jsx(Card, { map: map, layers: layers, toggleFromMap: toggleFromMap }), jsx(Menu, { map: map, toggleFromMap: toggleFromMap, addMarkers: addMarkers, addPolyline: addPolyline, addPolygon: addPolygon, addOverlay: addOverlay, startDrawingRoute: startDrawingRoute, finishDrawingRoute: finishDrawingRoute, cancelDrawingRoute: cancelDrawingRoute, isDrawingRoute: isDrawingRoute, routePoints: routePoints }), jsx(RouteDrawingBanner, { isDrawing: isDrawingRoute, pointsCount: routePoints.length })] }))] }));
};
const RouteDrawingBanner = ({ isDrawing, pointsCount }) => {
    if (!isDrawing)
        return null;
    const getBannerText = () => {
        if (pointsCount >= 2) {
            return `${pointsCount} pontos • Clique no botão Route para finalizar`;
        }
        else if (pointsCount === 1) {
            return '1 ponto • Continue clicando no mapa';
        }
        return 'Clique no mapa para adicionar pontos';
    };
    return (jsxs("div", { className: "route-drawing-banner", children: [jsx("span", { className: "banner-icon", children: "\uD83D\uDCCD" }), jsx("span", { className: "banner-text", children: getBannerText() })] }));
};

export { Card, HandleInputFile, Map, Menu, useMap };
//# sourceMappingURL=index.js.map
