import React from 'react';
import { Profile } from '../types/Profile';
import { MapPin, Mail, Phone, Tag, Briefcase, Globe, Award } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import Map from 'react-map-gl';
import { Marker } from 'react-map-gl';

interface ProfileDetailsProps {
  profile: Profile | null;
  isOpen: boolean;
  onClose: () => void;
}

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3RhY2tibGl0eiIsImEiOiJjbHRpZnN4dW0wbG5qMmtvOWd4NXptbXZnIn0.eyhqaHh6kohZ2g6ykYFYlg';

export function ProfileDetails({ profile, isOpen, onClose }: ProfileDetailsProps) {
  if (!profile) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-y-auto animate-scale-in">
          <div className="relative">
            <div className="h-64 overflow-hidden">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">{profile.name}</h2>
              <p className="text-xl opacity-90 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                {profile.role}
              </p>
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="p-8 space-y-8">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">About</h3>
              <p className="text-gray-700 leading-relaxed">{profile.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-5 h-5 mr-3 text-indigo-600" />
                      <span>{profile.contact.email}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-5 h-5 mr-3 text-indigo-600" />
                      <span>{profile.contact.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-indigo-600" />
                      <span>{profile.location.address}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        <Tag className="w-3 h-3 mr-2" />
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Location</h3>
                <div className="h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Map
                    initialViewState={{
                      longitude: profile.location.coordinates[0],
                      latitude: profile.location.coordinates[1],
                      zoom: 13
                    }}
                    style={{ width: '100%', height: '100%' }}
                    mapStyle="mapbox://styles/mapbox/streets-v12"
                    mapboxAccessToken={MAPBOX_TOKEN}
                  >
                    <Marker
                      longitude={profile.location.coordinates[0]}
                      latitude={profile.location.coordinates[1]}
                    >
                      <div className="text-indigo-600">
                        <MapPin className="w-8 h-8" />
                      </div>
                    </Marker>
                  </Map>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}