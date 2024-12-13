import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { MapPin, X } from 'lucide-react';
import { Profile } from '../types/Profile';
import * as Dialog from '@radix-ui/react-dialog';

interface MapModalProps {
  profile: Profile | null;
  isOpen: boolean;
  onClose: () => void;
}

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3RhY2tibGl0eiIsImEiOiJjbHRpZnN4dW0wbG5qMmtvOWd4NXptbXZnIn0.eyhqaHh6kohZ2g6ykYFYlg';

export function MapModal({ profile, isOpen, onClose }: MapModalProps) {
  if (!profile) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{profile.name}'s Location</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="h-[60vh] rounded-lg overflow-hidden">
              <Map
                initialViewState={{
                  longitude: profile.location.coordinates[0],
                  latitude: profile.location.coordinates[1],
                  zoom: 14
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                mapboxAccessToken={MAPBOX_TOKEN}
              >
                <Marker
                  longitude={profile.location.coordinates[0]}
                  latitude={profile.location.coordinates[1]}
                >
                  <MapPin className="w-8 h-8 text-indigo-600" />
                </Marker>
              </Map>
            </div>
            <p className="mt-4 text-gray-600">
              <MapPin className="inline-block w-4 h-4 mr-2" />
              {profile.location.address}
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}