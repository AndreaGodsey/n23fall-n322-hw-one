import React from 'react';
import { useRouter } from 'next/router';
import { Loader,Image,Card, Progress,} from 'semantic-ui-react';
import Aboutpokemon from '@/components/Aboutthepokemon';
import Iconcontainer from '@/components/Iconcontainer';
import Statisticcontainer from '@/components/Statisticcontainer';
import Footer from '@/components/Footer';
import styles from '@/styles/Divider.module.css';



export default function PokemonName() {
    const [pokemonInfo, setPokemonInfo] = React.useState({ loading: true});
    const router = useRouter();

    //console.log (router.query);

    React.useEffect(function(){
        if(pokemonInfo.name !== router.query.name && router.query.name) {
            console.log('Load in pokemon info', router.query.name)
            fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`).then(r=> r.json()).then(function(r) {
                setPokemonInfo(r);
            })
            .catch((e)  =>setPokemonInfo({ loading: false, name: router.query.name }));
        }
    })

    return(
    <>

    <div className={styles.divider}>Welcome to the PokeDex!</div>
    
    <h1 style={{display: "flex", alignItems: 'center', justifyContent: 'center', }}>Pokemon Name: {router.query.name}</h1>
    <Loader active={pokemonInfo.loading || pokemonInfo.name !== router.query.name} />
    {
        // if this statement

        pokemonInfo.id ? 

        //then do this; true
        <>
        
        <Card style={{width: '100%'}}>

        <Image src={pokemonInfo.sprites.front_default}></Image>

        <h3 style={{fontSize: 30}}>Weight: {pokemonInfo.weight}</h3>

        <div className="flex-col">

        {pokemonInfo.stats.map( (statObject) => {
            const statName = statObject.stat.name;
            const statValue = statObject.base_stat;

            return (
                <div className='flex items-stretch' style={{width:"100%", fontSize: 30}} key={statName} >
                
                <h3 style={{fontSize: 30}} className='p-3 w-2/4'>{statName}: {statValue}</h3>
                <Progress className='w-2/4 m-auto' value={statValue}></Progress>
               
                
                
                </div>

            )



        })}

        </div>
        <div className={styles.divider}>Abilities</div>
        <Aboutpokemon descriptionone='
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Commodo ullamcorper a lacus vestibulum sed arcu non. Facilisis mauris sit amet massa vitae tortor. Dignissim sodales ut eu sem. Vivamus at augue eget arcu dictum varius. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. At in tellus integer feugiat scelerisque varius morbi enim nunc. Aliquet nibh praesent tristique magna sit. Dignissim sodales ut eu sem integer vitae justo. Amet aliquam id diam maecenas ultricies mi eget. Nunc non blandit massa enim nec. Et ultrices neque ornare aenean euismod elementum nisi. Velit dignissim sodales ut eu sem integer vitae. Netus et malesuada fames ac turpis egestas. Non pulvinar neque laoreet suspendisse interdum consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh.bibendum arcu vitae elementum curabitur vitae. Cursus euismod.Velit dignissim sodales ut eu sem integer vitae. Netus et malesuada fames ac turpis egestas. Non pulvinar neque laoreet suspendisse interdum consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh.'
            />
            <div className={styles.divider}>Origins</div>
        <Aboutpokemon descriptionone='
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Commodo ullamcorper a lacus vestibulum sed arcu non. Facilisis mauris sit amet massa vitae tortor. Dignissim sodales ut eu sem. Vivamus at augue eget arcu dictum varius. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. At in tellus integer feugiat scelerisque varius morbi enim nunc. Aliquet nibh praesent tristique magna sit. Dignissim sodales ut eu sem integer vitae justo. Amet aliquam id diam maecenas ultricies mi eget. Nunc non blandit massa enim nec. Et ultrices neque ornare aenean euismod elementum nisi. Velit dignissim sodales ut eu sem integer vitae. Netus et malesuada fames ac turpis egestas. Non pulvinar neque laoreet suspendisse interdum consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh.bibendum arcu vitae elementum curabitur vitae. Cursus euismod.Velit dignissim sodales ut eu sem integer vitae. Netus et malesuada fames ac turpis egestas. Non pulvinar neque laoreet suspendisse interdum consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh.'
            />

        </Card>


        <Statisticcontainer/>
    
        <Iconcontainer/>
       
        <Footer/>
        </>

        //else do this; false
        : <>
        {(pokemonInfo.name !== router.query.name)
        ? <h2>Searching For Pokemon</h2> 
        : <h2>Pokemon Not Found</h2>

        }
        
        <Statisticcontainer/>
    
        <Iconcontainer/>
        
        <Footer/>

        </>
    }
    </>
   
    );
}