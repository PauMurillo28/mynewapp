export class Series {
        "id": number;
        "name": String;
        "channel": String;
        "seasons": number;
        "description": String;
        "webpage": String;
        "poster": String

        constructor(id: number, name: String, channel: String, seasons: number, description: String, webpage: String, poster: String) {
                this.id = id;
                this.name = name;
                this.channel = channel;
                this.seasons = seasons;
                this.description = description;
                this.webpage = webpage;
                this.poster = poster;
        }
      
}
