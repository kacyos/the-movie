import {
  Slider as ChackaSlider,
  SliderTrack,
  SliderFilledTrack,
  Box,
} from "@chakra-ui/react";

export function Slider() {
  return (
    <>
      <p>ola</p>
      <ChackaSlider
        onChange={(value) => {
          console.log(value);
        }}
        defaultValue={0}
        min={1}
        max={10}
        step={1}
      >
        <SliderTrack bg="red.100">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
      </ChackaSlider>
    </>
  );
}
