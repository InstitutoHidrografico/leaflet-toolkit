import * as L from "leaflet";
interface CardProps {
    map: L.Map;
    layers: L.Layer[];
    toggleFromMap: (feature: L.Layer) => void;
}
export declare const Card: ({ map, layers, toggleFromMap }: CardProps) => import("react/jsx-runtime").JSX.Element;
export {};
