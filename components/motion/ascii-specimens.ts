export type AsciiSpecimenVariant = "butterfly-conservatory" | "babys-breath-constellation";

export const asciiSpecimens: Record<AsciiSpecimenVariant, { desktop: string; mobile: string }> = {
  "butterfly-conservatory": {
    desktop: String.raw`
              ·       .               
         .       +          ·         
      ·      .-''''''''-.        *    
           .'      ·     '.            
     .    /  .  001100  .  \    ·     
         /    0011111100     \         
    +   |  01110/\/\01110  .  |  .     
        | 0111 /  \ 1110     |        
    .   | 011{  · }110   *   |    ·   
        |  01 \  / 10        |        
     ·  |   \\ || //     .   |  +     
        | .  \\||//          |        
    *   | 010==||==010       |    .   
        |    //||\\      ·   |        
     .  | 001/ || \100       |  ·     
        | 011  /\  110   .   |        
    ·   |  '._/  \_.'        |    +   
        | .   ·   .   *      |        
        +--------------------+        
          . · .  +  . · .             `,
    mobile: String.raw`
       ·    +    ·       
     .-''''''''-.        
    /   001100   \       
   |  011/\/\110  |  ·    
   |  01 \  / 10  |      
   |   \\||//  .  |      
   | 01==||==10   |  +   
   |   //||\\     |      
   |  01 /\ 10    |      
   | · '  '  *   |      
   +-------------+      `,
  },
  "babys-breath-constellation": {
    desktop: String.raw`
          ·             *
      .       +     ·
          \   |   /
       ·---\--+--/---.
        .   \ | /   ·
     *-------\|/-------+
          .  /|\  ·
       ·    / | \       .
          +  ·  *`,
    mobile: String.raw`
      ·       *
        \ | /
    . ---\|/--- ·
       · /|\
        / | \  +`,
  },
};
