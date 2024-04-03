import React, { useState } from "react";
import { Box, Heading, Text, VStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button, useBreakpointValue } from "@chakra-ui/react";
import { FaRedo } from "react-icons/fa";

const questions = {
  short: {
    strangers: {
      casual: ["What's your favorite hobby?", "What's the best place you've ever visited?", "What's your favorite movie or TV show?"],
      professional: ["What do you do for a living?", "What's your biggest professional achievement?", "What's the most important skill in your field?"],
    },
    friends: {
      casual: ["What's the craziest thing you've ever done?", "What's your favorite childhood memory?", "If you could have any superpower, what would it be?"],
      professional: ["What's the most challenging project you've worked on?", "How do you handle stress at work?", "What's your dream job?"],
    },
  },
  deep: {
    strangers: {
      casual: ["What's the most important lesson life has taught you?", "If you could change one thing about the world, what would it be?", "What's the most meaningful experience you've had?"],
      professional: ["What's the biggest risk you've taken in your career?", "How do you define success?", "What's the most important quality in a leader?"],
    },
    friends: {
      casual: ["What's your biggest fear?", "What's the hardest decision you've ever had to make?", "What's the most important thing in a friendship?"],
      professional: ["What's the biggest challenge you've faced in your personal life?", "How do you balance work and personal life?", "What's the most valuable advice you've ever received?"],
    },
  },
};

const Index = () => {
  const [length, setLength] = useState(50);
  const [familiarity, setFamiliarity] = useState(50);
  const [nature, setNature] = useState(50);
  const [question, setQuestion] = useState("");

  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });

  const generateQuestion = () => {
    const lengthKey = length < 50 ? "short" : "deep";
    const familiarityKey = familiarity < 50 ? "strangers" : "friends";
    const natureKey = nature < 50 ? "casual" : "professional";

    const selectedQuestions = questions[lengthKey][familiarityKey][natureKey];
    const randomIndex = Math.floor(Math.random() * selectedQuestions.length);
    setQuestion(selectedQuestions[randomIndex]);
  };

  return (
    <Box p={4}>
      <Heading size={headingSize} mb={4} textAlign="center">
        Get to Know Each Other
      </Heading>
      <VStack spacing={6} align="stretch">
        {question && (
          <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" bg="white">
            <Text fontSize="xl" fontWeight="bold">
              {question}
            </Text>
          </Box>
        )}
        <Box>
          <Text mb={2}>Length: {length < 50 ? "Short" : "Deep"}</Text>
          <Slider value={length} onChange={setLength} min={0} max={100} step={1}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Box>
          <Text mb={2}>Familiarity: {familiarity < 50 ? "Strangers" : "Friends"}</Text>
          <Slider value={familiarity} onChange={setFamiliarity} min={0} max={100} step={1}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Box>
          <Text mb={2}>Nature: {nature < 50 ? "Casual" : "Professional"}</Text>
          <Slider value={nature} onChange={setNature} min={0} max={100} step={1}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Button leftIcon={<FaRedo />} onClick={generateQuestion} size={buttonSize} colorScheme="blue">
          Generate Question
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
