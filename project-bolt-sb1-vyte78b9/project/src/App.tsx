import React, { useState } from 'react';
import { profiles } from './data/profiles';
import { ProfileCard } from './components/ProfileCard';
import { MapModal } from './components/MapModal';
import { SearchBar } from './components/SearchBar';
import { ProfileDetails } from './components/ProfileDetails';
import { Profile } from './types/Profile';
import { Users } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const filteredProfiles = profiles.filter((profile) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      profile.name.toLowerCase().includes(searchLower) ||
      profile.role.toLowerCase().includes(searchLower) ||
      profile.location.address.toLowerCase().includes(searchLower)
    );
  });

  const handleShowMap = (profile: Profile) => {
    setSelectedProfile(profile);
    setIsMapOpen(true);
  };

  const handleShowDetails = (profile: Profile) => {
    setSelectedProfile(profile);
    setIsDetailsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Profile Explorer</h1>
            </div>
            <div className="w-96">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onShowMap={handleShowMap}
              onShowDetails={handleShowDetails}
            />
          ))}
        </div>

        <MapModal
          profile={selectedProfile}
          isOpen={isMapOpen}
          onClose={() => setIsMapOpen(false)}
        />

        <ProfileDetails
          profile={selectedProfile}
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
        />
      </main>
    </div>
  );
}

export default App;