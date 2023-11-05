let map;

async function initMap() {
    // The location of Lifted Logic
    const position = { lat: 38.98956, lng: -94.66880 };
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
        "marker",
    );
    // The map, centered at Lifted Logic
    map = new Map(document.getElementById("theMap"), {
        zoom: 13,
        center: position,
        disableDefaultUI: true,
        mapId: "e8442ed360ea255c"
    });

    const pinBackground = new PinElement({
        background: "#42A418",
        glyphColor: "#ffffff",
        borderColor: "#ffffff"
    })

    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Lifted Logic",
        content: pinBackground.element
    });
}

if (typeof google === 'object' && typeof google.maps === 'object') {
    initMap();
}