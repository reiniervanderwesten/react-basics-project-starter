import {Center, Flex, Heading, Button, Image, Text, Tag } from "@chakra-ui/react";

export const RecipePage=({choice, clickFn})=>{
    const ingredienten= choice.ingredientLines.join(', ');

    return(
        <Center gap={5} flexDir={'column'} h={'fit-content'} ml= {3} mt={4} pt= {2} w={{sm:'full', md: '50vw'}}>
            <Image src={choice.image} w={{base: 300, sm: 500, md: 700}} h={{base: 300, sm: 500, md:700}} borderRadius={'md'}/> 
            <Heading>Your choice: {choice.label}</Heading>
            <Flex gap={5} flexDir={"column"} flexWrap={'wrap'} w= {{base: '100%', sm: '50%', md: '50%'}} justify='center'>
                <Text>{choice.mealType}</Text>
                <Text>{choice.dishType}</Text>
                <Text>Cooking Time: {choice.totalTime} minutes</Text>
                <Flex gap={6} Flexdir={'row'} flexWrap={'wrap'} justify={'flex-start'}>
                {choice.dietLabels.map((dietLabel)=>(
                    <Tag bg={'green.200'} p={2} key={dietLabel}>{dietLabel}</Tag>
                ))}
                    
                </Flex>
                <Flex gap={6} Flexdir={'row'} flexWrap={'wrap'} justify={'flex-start'}>
                {choice.healthLabels.map((healthLabel)=>(
                    <Tag bg={'blue.200'} p={2} key={healthLabel}>{healthLabel}</Tag>
                ))}
                </Flex>
                <Flex gap={6} Flexdir={'row'} flexWrap={'wrap'} justify={'flex-start'}>
                {choice.cautions.map((caution)=>(
                    <Tag bg={'red.400'} p={2} key={caution}>{caution}</Tag>
                ))}
                

                </Flex>
                <Text>{ingredienten}</Text>
                <Text>Servings: {choice.yield}</Text>
                <Text>
                Enerc_Kcal: {choice.totalNutrients.ENERC_KCAL .quantity}, protein: { choice.totalNutrients.PROCNT.quantity},  
                 fat: {choice.totalNutrients.FAT.quantity}, carbs: {choice.totalNutrients.CHOCDF.quantity}, 
                 cholesterol: {choice.totalNutrients.CHOLE.quantity}, sodium: {choice.totalNutrients.NA.quantity}.


                </Text>
            
                
            </Flex>
            <Button mb= {2} onClick={()=>clickFn()}>Resetten</Button>
            
            



        </Center>

       


    );
};