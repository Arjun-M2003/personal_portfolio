export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'blue');
    static readonly JAVASCRIPT = new Tag('Javascript', 'yellow');
    static readonly REACT = new Tag('React', 'teal');
    static readonly MONGODB = new Tag('MongoDB', 'purple');
    static readonly CPLUSPLUS = new Tag('C++', 'orange');
    static readonly PYTHON = new Tag('python', 'green');
    static readonly JAVA = new Tag('Java', 'brown');
    static readonly HTML = new Tag('HTML', 'pink'); 
    static readonly CSS = new Tag('CSS', 'lightblue');
    static readonly SQL = new Tag('SQL', 'darkblue');
    static readonly NODEJS = new Tag('Node.js', 'lime');
    static readonly EXPRESS = new Tag('Express', 'cyan');
    static readonly GIT = new Tag('Git', 'gray');
    static readonly DOCKER = new Tag('Docker', 'lightgreen');
    static readonly KUBERNETES = new Tag('Kubernetes', 'lightpurple');
    static readonly AWS = new Tag('AWS', 'gold');
    static readonly AZURE = new Tag('Azure', 'skyblue');
    static readonly NEXTJS = new Tag('Next.js', 'navy');


    private constructor(private readonly key: string, public readonly color: string){}
    
    toString(){
        return this.key;
    }
}