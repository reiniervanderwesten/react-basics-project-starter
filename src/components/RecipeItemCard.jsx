import {Card, Image, Heading, Text,Flex, Tag} from "@chakra-ui/react";

export const RecipeItemCard=({recipe, clickFn})=>{
    const veg=recipe.healthLabels.filter((word)=>(word==="Vegetarian")||(word==="Vegan") );
    return(
        <Card  justify={'center'} cursor={'pointer'} ml= {2} variant= 'outline'  onClick={()=>clickFn(recipe)}>
            <Image 
                src={recipe.image} 
                w={100} 
                h={100} 
                borderRadius={'md'} 
                padding={2}
            />
            <Heading size={'md'} color= {{base: 'red', sm: 'green', md: 'blue', lg: 'red.400'}} margin={3}> {recipe.label}</Heading>
            <Flex gap={6} flexDir={'row'}>  
                {recipe.dietLabels.map((dietLabel)=>(
                    <Tag bg={'green.200'} p={2} key={dietLabel}>{dietLabel}</Tag>
                ))}

            </Flex>
            <Text>caution:</Text>
            <Flex gap={6} flexDir={'row'} flexWrap={'wrap'}>
                {recipe.cautions.map((caution)=>(
                    <Tag bg={'blue.200'} p={2} key={caution}>{caution} </Tag>
                ))}

            </Flex>
            <Text>{recipe.mealType}</Text>
            <Text>{recipe.dishType}</Text>
            <Flex gap={3} flexDir={'row'}>
               {veg.map((veggie)=>(
                    <Tag bg={'red.200'} p={2} key={veggie}>{veggie}</Tag>
                ))}

            </Flex>
            



                        

        </Card>
    );
};