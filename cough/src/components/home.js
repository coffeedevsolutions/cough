import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const asciiTree = `
                                                                                 ++*                                                                               
                                                                         +**++************                                                                         
                                                                      ***##*****##%#****###***                                                                     
                                                                   **###***+**##****##########**                                                                   
                                                                 *****#***************#%###*****#*+                                                                
                                                              *******####*#***+*#################***                                                               
                                                          +++***+++*****#########*****###%%##%#######*                                                             
                                          *+           +*******+*+######%******##****##%%%#**+****##*#**                                                           
                                    *****#*###*****++*#*##+***####******#######%####%####***###*******#*##***                                                      
                                ********#***####****###**######****#####%#####%%###**%#**##**##****#****#******                                                    
                            ++****##**####*##%%%#####***###***#######%#%%%###********####****#**##***#####******                                                   
                         +****#***###%**#######%%#%%#****########%%%%%%%%%%%##****####*######%#*######*****#**#***                                                 
                       *******####****##*#*###%%%#%*#######%%##%%%%%%%%#***+*****#***####***#%###%#######**#*******                                                
                      *****###***###***######%%%%%*****####%%#%%%%%%%###**###**##*##**##*#*##%%%##%%%####********#**                                               
         +            **#***##*#######*##%##%%%%#*+#%#######%%%%%%%%%%%######################%%%%%%%%****######*#***+                                              
         +++            *##*############%##%#**##%%%%%%#######%%%%%%%%%%#%%%%%#########%%##%%%%%%%%%%%#######%#########**                                          
           ++++           *##########**####**#%%%%%%%%%%%######%%%%%%%%%%%%%%%%%%*###%###%%%%%%%%%%%%%%%%###%%########*##*                                         
             +++++++++==++++=++##++*********##*#%%%%####%%#*###%%%%%%%%%%####%#**#%%%%%%%####%%%%%%######%%%%#######%#####***                                      
                 +++++++++==+==+*++************+*#%%####%%#***###%%*#%%#*##%%##+#%%%#%%%%%%####*#%%%%#%%%##%%%%%%%%%%######***+                                    
          *++++*****########*+==+++*+*********++***######%#***#%%%%%%%%###*#%%%###%%#%%#%%%%%%%%##%%##%%%#%%%%%%%%#%#%#%######**                                   
        ++**#####**++=+#######+==+*+******++****+**#####%##*#%%#%##%%%%%%#%%#%##%%%%%%%%%%%#%%%%%#%%%%%%%%%#%%%#%%%%%%%%%%%%%#**                                   
       ***#*#####*+##+=+***##%#+++++*##*++***++*+++##%%%##*  ##%%%%%%%%%#############%%#%%###*####%%%%%%%%%%%%%#%%%##########*                                     
      +***###*###**##+=++######++++*#*###%%######+=*%%##       **##%%%%##%%##**##*#####%#***#*   *+        %                                                       
  +++**********##+%%#*=++#####***+*****#%%%%%%%%%*=*#    ++++***###%%##*#########*****##************#**                                                            
  +**#*#####****+#+======++*### +******########%%#=++++++++++******#******#%%#*****#*##**##******##*##***** ***                                                    
+****####*#*#####+=======+***#####*###*#####*****+****+***####********##******##*****##*##****#*#*##*###########***                                                
**##*##*##*######+=======+*#####%#*****++**++++++******#*##*##*****##**#*#***********##**##########***##**##***##**                                                
  ****##         +*+=====++#####%%%%#+++++++++++*****##*+*#****#####*******+**#******##**##***######**#*#***###*###*                                               
                 ===++====+*#####*+++++++++=++*******************#+**########***######*##%#########*****#****#####*                                                
           ====+++++++++==++#####*++++*+=+++++******+*****#*####***###*######  *#*######**###*#****#######**##******  ** *+                                        
                    ++==+==+*#####+++++++++**   #*****#*##**########%%########****###############******###**####**##*#######**                                     
                      ++**+++#####***+++++         ####**   *########*#*#**#**#****#*+**#######################################*#**                                
                      +++**+++%###                                       ##*######***##**##****#***###%###########%#############*##*                               
                       =++**++*%##     **                                 ****##**##**#****#####**#################################**                              
                       ==++++++*##   +++*                                  **#*##*#**#*####*****##*###%%########%##############*#####**                            
                        =+++++++++++++++                                       #******#**##**#####***# #%###########%###%#############*                            
                        **++++++*++++++++                                       #**##### ******#*****####%#%%%######%##########%#######                            
                        ***+++++++****++++                                                ***#*         ############################                               
                         *###**********++++                                                                 ###############** ###*                                 
                         *###****###*******                                                                              *                                         
                    +++****##*+*************                                                                                                                       
           +++++++***###%**###**+++++**###%%##*#                                                                                                                   
    *+++++++++++********++++***%#++++*%%######%#####****##*****                                                                                                    
  ++++++++++*****++++++++++++***#****#*#*##*################*****                                                                                                  
   ***#####************************************#################                                                                                                   
    +*##################################%%%%%%%%%%%%%%%%%%%##%##                                                                                                   
   ****######################################################%%#                                                                                                   
    *****#####*##############################################%%#                                                                                                            
  `;

  const asciiArt = `
          .---.             .---.        .-.                     .--.           .----.        .-.               
      .---|---|     .-.     |The|  .---. |~|    .--.         .---|  |   .-.     |A   |  .---. |G|    .---.      
   .--|===|Kaf|-----|_|--.__|Mas|--|:::| |~|-==-|==|----. .--|===|  |---|_|--.__|Writ|--|:::| |E|-==-|===|---.  
   |%%|Chi|ka |=====| |~~|%%|ter|--|The|_|~|The |  |____|-|%%|Goo|  |===| |~~|%%|er  |--|Dr |_|B|Stil|Psy|---|-.
   |  |ldh|on |Good | |==|  |&  |  |Mes|=| |R   |  |Para|=|  |d  |  |Leg| |==|  |in  |  |Fau|=|:|well|cho|The|=|
   |  |ood|the|Strat| |  |  |Mar|  |sy | | |I   |  |dise| |  |Ome|  |acy| |  |  |His |  |stu| |E|&the|nau|Sov| |
   |  |s  |Sho|Bad  | |  |  |gar|  |Mid| | |A   |  |Lost| |  |ns |  |of | |  |  |Time|  |s  | |G|AEIC|ts |iet| |
   |  |End|re |Strat|_|__|  |ita|__|dle| | |L   |  |    | |  |   |  |Ash|_|__|  |    |  |   | |B|    |   |Exp| |
   |~~|===|---|=====|~|~~|%%|~~~|--|:::|=|~|----|==|----|=|~~|===|--|===|~|~~|%%|~~~~|--|:::|=|~|----|===|---|=|
    '--^---'---^-----^-^--^--^---'--^---^-^-^-==-^--^----^-^--^---'--^---^-^--^--^----'--^---^-^-^-==-^---^---^-' 
  `;

  const asciiArtMobile = `
    .---.             .---.        .-.             
.---|---|     .-.     |The|  .---. |~|    .--.     
|===|Kaf|-----|_|--.__|Mas|--|:::| |~|-==-|==|----.
|Chi|ka |=====| |~~|%%|ter|--|The|_|~|The |  |____|
|ldh|on |Good | |==|  |&  |  |Mes|=| |R   |  |Para|
|ood|the|Strat| |  |  |Mar|  |sy | | |I   |  |dise|
|s  |Sho|Bad  | |  |  |gar|  |Mid| | |A   |  |Lost|
|End|re |Strat|_|__|  |ita|__|dle| | |L   |  |    |
|===|---|=====|~|~~|%%|~~~|--|:::|=|~|----|==|----|
'---'---^-----^-^--^--^---'--^---^-^-^-==-^--^----'

    .--.           .----.  .---. .-.             
|===|st|---|_|--.__|Writ|--|:::| |E|-==-|===|---.
|Goo|er|===| |~~|%%|er  |--|Dr |_|B|Stil|Psy|---|
|d  |& |Leg| |==|  |in  |  |Fau|=|:|well|cho|The|
|Ome|Ma|acy| |  |  |His |  |stu| |E|&the|nau|Sov|
|ns |rg|of | |  |  |Time|  |s  | |G|AEIC|ts |iet|
|   |  |Ash|_|__|  |    |  |   | |B|    |   |Exp|
|===|--|===|~|~~|%%|~~~~|--|:::|=|~|----|===|---|
'---'--^---^-^--^--^----'--^---^-^-^-==-^---^---'
`;

  return (
    <div className="mobile-home">
        <div className="home-container">
          <pre className="tree">{asciiTree}</pre>
          <div className="header-container">
            <h1 className="home-header">A Collection of Disparate Thoughts</h1>
          </div>
          <pre className="art">{asciiArt}</pre>
          <pre className="art-mobile">{asciiArtMobile}</pre>
          </div>
        </div>

  );
}

export default Home;