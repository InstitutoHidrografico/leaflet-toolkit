import * as L from "leaflet";
interface UseMapReturn {
    map: L.Map | undefined;
    layers: L.FeatureGroup[];
    createLayer: (elements: L.Layer[]) => L.FeatureGroup;
    addMarkers: (points: L.LatLng[]) => L.FeatureGroup;
    addPolygon: (points: L.LatLng[]) => L.FeatureGroup;
    addPolyline: (points: L.LatLng[]) => L.FeatureGroup;
    addOverlay: (sw: L.LatLngExpression, ne: L.LatLngExpression, file: File) => L.FeatureGroup;
    toggleFromMap: (layer: L.Layer) => void;
    startDrawingRoute: () => void;
    finishDrawingRoute: () => L.FeatureGroup | null;
    cancelDrawingRoute: () => void;
    isDrawingRoute: boolean;
    routePoints: L.LatLng[];
}
export declare const useMap: () => UseMapReturn;
export {};
