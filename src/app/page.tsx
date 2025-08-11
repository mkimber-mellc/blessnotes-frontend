import { BlockContainer, MainContainer} from 'mellc-ui-kit';
import ScriptureOfTheDay from '@/components/ScriptureOfTheDay';
import JournalCard from '@/components/JournalCard';
import MoodPicker from '@/components/MoodPicker';
import MusicRecommendation from '@/components/MusicRecommendation';

export default function HomePage() {
  return (
    <MainContainer bg='bgprimary' padding='none'>
        <ScriptureOfTheDay />
      <JournalCard />
      <MoodPicker />
      <MusicRecommendation />
    </MainContainer>
  );
}
