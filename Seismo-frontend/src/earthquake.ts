

export class Earthquake {
_id?;
e_Type: String;
    metadata: {
          generated: number,
          url:  String,  
          title: String, 
          ccount: number,   
    };
    features: { 
          type: Object,
          properties: { 
              mag: number,
              municipality: String,
              time: number,
              updated: number,
              tz: Number,
              url: String,
              detail: String,
              felt: Number,
              cdi: Number,
              alert: null,
              status: String,
              tsunami: Number,
              sig: Number,
              ids: String,
              sources: String,
              nst: null,
              dmin: number
          };
          geometry: {
              g_Type: String,
              coordinates: [number]       
          };
          id: String
        }
    };