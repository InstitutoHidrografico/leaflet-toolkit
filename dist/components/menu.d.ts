import * as L from "leaflet";
interface MenuProps {
    map: L.Map;
    toggleFromMap: (feature: L.FeatureGroup) => void;
    addMarkers?: (points: L.LatLng[]) => L.FeatureGroup;
    addPolyline?: (points: L.LatLng[]) => L.FeatureGroup;
    addPolygon?: (points: L.LatLng[]) => L.FeatureGroup;
    addOverlay?: (sw: L.LatLngExpression, ne: L.LatLngExpression, file: File) => L.FeatureGroup;
    startDrawingRoute?: () => void;
    finishDrawingRoute?: () => L.FeatureGroup | null;
    cancelDrawingRoute?: () => void;
    isDrawingRoute?: boolean;
    routePoints?: L.LatLng[];
}
export declare const Menu: ({ map, toggleFromMap, addMarkers, addPolyline, addPolygon, addOverlay, startDrawingRoute, finishDrawingRoute, cancelDrawingRoute, isDrawingRoute, routePoints }: MenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
