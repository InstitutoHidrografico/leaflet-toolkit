import type { ChangeEvent } from "react";
import * as L from "leaflet";
type InputProps = {
    event: ChangeEvent<HTMLInputElement>;
    map: L.Map;
    toggleFromMap: (feature: L.FeatureGroup) => void;
    addMarkers?: (points: L.LatLng[]) => L.FeatureGroup;
    addPolygon?: (points: L.LatLng[]) => L.FeatureGroup;
    addPolyline?: (points: L.LatLng[]) => L.FeatureGroup;
    addOverlay?: (sw: L.LatLngExpression, ne: L.LatLngExpression, file: File) => L.FeatureGroup;
};
export declare const HandleInputFile: ({ event, toggleFromMap, addMarkers, addPolygon, addPolyline, addOverlay }: InputProps) => Promise<L.LatLng[]>;
export {};
