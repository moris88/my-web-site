import { DeveloperCategory, DeveloperProfile } from '@/types'
import React from 'react'

const DEVELOPER_PROFILES: Record<DeveloperCategory, DeveloperProfile> = {
  frontend: {
    title: 'Frontend Developer',
    shortLabel: 'Interfacce utente e design web',
    description:
      'Ti piace progettare ciò che l’utente vede: interfacce belle, interattive e responsive. Usi HTML, CSS, JavaScript e framework come React o Vue.',
    reasons: [
      'Preferisci vedere subito i risultati visivi',
      'Ti piace lavorare con layout e design',
      'Ami creare esperienze utente intuitive',
    ],
  },
  backend: {
    title: 'Backend Developer',
    shortLabel: 'Logica, API e gestione dati',
    description:
      "Ti occupi della logica che fa funzionare un'app: server, sicurezza, API, database. Scrivi codice efficiente e sicuro in linguaggi come Python, Java, PHP.",
    reasons: [
      'Preferisci lavorare con i dati e la logica',
      'Ti interessa la sicurezza e la scalabilità',
      'Ami costruire API e sistemi robusti',
    ],
  },
  fullstack: {
    title: 'Full-stack Developer',
    shortLabel: 'Frontend + Backend = Potenza totale',
    description:
      'Sai muoverti sia nel frontend che nel backend: costruisci applicazioni complete, conosci database, API, interfacce utente e tutto il ciclo di sviluppo.',
    reasons: [
      'Ti piace avere una visione completa del progetto',
      'Non vuoi limitarti a una sola area',
      'Ami essere versatile e indipendente',
    ],
  },
  desktop: {
    title: 'Software Desktop Developer',
    shortLabel: 'App per computer',
    description:
      'Sviluppi software che gira su Windows o Mac, anche offline. Usi linguaggi come C#, Java o C++, e gestisci interfacce, file, dispositivi locali.',
    reasons: [
      'Ti interessano le app installabili su PC',
      'Ami lavorare con logica e interfacce grafiche',
      'Vuoi creare programmi completi e autonomi',
    ],
  },
  mobile: {
    title: 'Mobile Developer',
    shortLabel: 'App per smartphone e tablet',
    description:
      'Costruisci app per Android o iOS, che interagiscono con fotocamera, notifiche, GPS. Usi Flutter, Kotlin, Swift o React Native.',
    reasons: [
      'Ami le app mobili e il design touch',
      'Ti piace sfruttare le funzionalità dello smartphone',
      'Vuoi essere presente negli store di app',
    ],
  },
  database: {
    title: 'Database Specialist',
    shortLabel: 'Gestione e architettura dei dati',
    description:
      'Progetti, ottimizzi e gestisci database. Scrivi query, crei strutture dati efficienti e garantisci integrità e sicurezza dei dati.',
    reasons: [
      'Ti piace lavorare con dati e strutture logiche',
      'Ami scrivere query complesse e ottimizzare performance',
      'Ti interessa la gestione e l’analisi dei dati',
    ],
  },
}

interface QuizResultPopupProps {
  category: DeveloperCategory
  onClose: () => void
}

function QuizResultPopup({
  category,
  onClose,
}: Readonly<QuizResultPopupProps>) {
  const profile = DEVELOPER_PROFILES[category]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <button
          aria-label="Close"
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="mb-2 text-2xl font-bold text-blue-600">
          {profile.title}
        </h2>
        <p className="mb-4 text-sm italic text-gray-500">
          {profile.shortLabel}
        </p>
        <p className="mb-4 text-gray-700">{profile.description}</p>
        <div>
          <h3 className="mb-1 font-semibold text-gray-800">
            Perché ti si addice:
          </h3>
          <ul className="list-inside list-disc space-y-1 text-gray-600">
            {profile.reasons.map((reason, i) => (
              <li key={i}>{reason}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default QuizResultPopup
