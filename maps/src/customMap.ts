// instruction to every other class as to how they can be a marker
export interface Mappable {
	// if a value wants to be used as an argument to add marker,
	// it must have a location property that has lat and lng which are numbers
	location: {
		lat: number,
		lng: number,
	}
	markerContent(): string
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			}
		});
	}

	addMarker(mappable: Mappable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			}
		});
	marker.addListener('click', () => {
		const infoWindow = new google.maps.InfoWindow({
			content: mappable.markerContent(),
		});
		infoWindow.open(this.googleMap, marker);
	})
	}

}