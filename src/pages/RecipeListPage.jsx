import { Center, Heading,  Flex, Input } from '@chakra-ui/react';
import { data } from '../utils/data';
import { useState } from 'react';
import {RecipeItemCard} from '../components/RecipeItemCard';

export const RecipeListPage = ({clickFn}) => {
  
  const recepten=data.hits;
  const [searchField, setSearchField]=useState('');
  
  
  

  const matchedRecipes=recepten.filter((recept)=>{
    return recept.recipe.label.toLowerCase().includes(searchField.toLowerCase())
    
  
  });

  

  

  const handleChange= (event)=>{
    setSearchField(event.target.value);
  };

  

 

  

  
  
  
  
  // You can play around with the console log, but ultimately remove it once you are done
  

  
  
  return (
    <Flex h="fit-content"  w="100vw" flexDir={'column'}  >
      <Heading ml= {2} mt={6} mb= {6} alignSelf={'center'}>Your Recipe App</Heading>

      <Flex gap={8} flexDir={{ base: 'column', sm: 'row'}} flexWrap={'wrap'} alignContent={{base: 'center', sm: 'flex-start', md: 'flex-start'}} >

        {matchedRecipes.map((recept)=>(
          <RecipeItemCard key={recept.recipe.label} recipe={recept.recipe} clickFn={clickFn}/>

        ))}
        
        


      </Flex>

      

      <Input w={'200'} mt={'10'} placeholder="search on name" onChange={handleChange}></Input>
      
      
      
      
      
      
        
      
      
      
    </Flex>

  );
};
