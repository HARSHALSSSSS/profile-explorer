import React from 'react';
import { MapPin, Mail, Phone, Tag, ExternalLink } from 'lucide-react';
import { Profile } from '../types/Profile';

interface ProfileCardProps {
  profile: Profile;
  onShowMap: (profile: Profile) => void;
  onShowDetails: (profile: Profile) => void;
}

export function ProfileCard({ profile, onShowMap, onShowDetails }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold">{profile.name}</h3>
          <p className="text-white/90">{profile.role}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 line-clamp-2 mb-4">{profile.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
            <span className="text-sm">{profile.location.address}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-2 text-indigo-600" />
            <span className="text-sm">{profile.contact.email}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {profile.interests.slice(0, 2).map((interest, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
            >
              <Tag className="w-3 h-3 mr-1" />
              {interest}
            </span>
          ))}
          {profile.interests.length > 2 && (
            <span className="text-xs text-gray-500">+{profile.interests.length - 2} more</span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onShowMap(profile)}
            className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <MapPin className="w-4 h-4 mr-2" />
            View Map
          </button>
          <button
            onClick={() => onShowDetails(profile)}
            className="flex items-center justify-center px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Details
          </button>
        </div>
      </div>
    </div>
  );
}