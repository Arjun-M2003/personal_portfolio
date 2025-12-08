export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'blue');
    static readonly JAVASCRIPT = new Tag('Javascript', '#b59f3b');
    static readonly REACT = new Tag('React', 'teal');
    static readonly MONGODB = new Tag('MongoDB', 'purple');
    static readonly CPLUSPLUS = new Tag('C++', 'orange');
    static readonly PYTHON = new Tag('python', 'green');
    static readonly JAVA = new Tag('Java', 'brown');
    static readonly HTML = new Tag('HTML', 'pink'); 
    static readonly CSS = new Tag('CSS', 'lightblue');
    static readonly SQL = new Tag('SQL', 'darkblue');
    static readonly NODEJS = new Tag('Node.js', '#32CD32');
    static readonly EXPRESS = new Tag('Express', '#008080');
    static readonly DOCKER = new Tag('Docker', 'maroon');
    static readonly AWS = new Tag('AWS', 'gold');
    static readonly AZURE = new Tag('Azure', 'skyblue');
    static readonly NEXTJS = new Tag('Next.js', 'navy');
    static readonly FASTAPI = new Tag('FastAPI', 'darkgreen');
    static readonly AI = new Tag('AI', 'darkorange');
    static readonly GRAPHQL = new Tag('GraphQL', 'brown');
    static readonly PANDAS = new Tag('Pandas', 'lightgreen');
    static readonly NUMPY = new Tag('NumPy', 'lightcoral');
    static readonly STATSMODEL = new Tag('Statsmodel', 'lightpurple');
    static readonly FOLIUM = new Tag('Folium', 'lightgray');
    static readonly GEOPANDAS = new Tag('GeoPandas', 'darkyellow');



    private constructor(private readonly key: string, public readonly color: string){}
    
    toString(){
        return this.key;
    }
}
