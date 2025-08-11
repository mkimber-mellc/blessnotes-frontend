'use client';

import React, { useEffect, useState } from 'react';
import {
  Title,
  BodyText,
  FlexContainer,
  BlockContainer,
  CaptionText,
  Card,
  Center,
} from 'mellc-ui-kit';
import Image from 'next/image';

export default function ScriptureOfTheDay() {
  const [verse, setVerse] = useState<{ text: string; reference: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchVerse() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch('https://beta.ourmanna.com/api/v1/get/?format=json');
        const data = await res.json();
        setVerse({
          text: data.verse.details.text,
          reference: data.verse.details.reference,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchVerse();
  }, []);

  return (
    <BlockContainer padding="xl" className="sm:p-16 md:px-24 lg:px-32">
      {loading ? (
        <BodyText color="textlight">Loading...</BodyText>
      ) : error ? (
        <FlexContainer
          bg="bg-red-900"
          justify="center"
          alignItems="center"
          padding="xl"
          borderRadius="xl"
        >
          <BodyText size="lg" color="text-white" weight="bold" align="center">
            Couldn’t load today’s verse. Please try again.
          </BodyText>
        </FlexContainer>
      ) : (
        <Card bg="bggradient-primary-secondary" padding="lg">
          <Title color="textsecondary">Scripture of the Day</Title>
          <Center>
            <Image src={'/open-bible.png'} alt="opened bible" width={150} height={50} />
          </Center>
          <BlockContainer mt="lg">
            <BodyText color="textprimary" align="center" italic className="mb-0">
              {verse?.text}
            </BodyText>
            <CaptionText color="textprimary" align="center">
              {verse?.reference}
            </CaptionText>
          </BlockContainer>
        </Card>
      )}
    </BlockContainer>
  );
}
