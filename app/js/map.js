// map
if (document.querySelector("#map")) {
  initMap();

  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

    const maps = document.querySelectorAll("#map, .map");
    maps.forEach((elemMap) => {
      const map = new YMap(elemMap, {
        location: {
          center: [34.082073, 44.988871],
          zoom: 12,
        },
        behaviors: ["drag", "scrollZoom:false"],
      });

      map.addChild(new YMapDefaultSchemeLayer());
      map.addChild(new YMapDefaultFeaturesLayer());

      const addNewMarker = () => {
        let count = 1;
        return function (a, b) {
          const newMarker = document.createElement("div");
          newMarker.innerHTML = `<div class="marker marker-${count}">${count}</div>`;

          const marker = new ymaps3.YMapMarker(
            {
              coordinates: [a, b],
              draggable: false,
              mapFollowsOnDrag: true,
            },
            newMarker
          );
          map.addChild(marker);
          count++;
        };
      };

      const newMarker = addNewMarker();
      newMarker(34.082073, 44.988871);
    });
  }
}
