import React, {useState} from 'react';
import styles from './styles.module.css';

// Ejercicios interactivos de phishing.
// Cada escenario simula un correo. El usuario decide si es phishing o legítimo
// y recibe retroalimentación con las señales a observar.
const SCENARIOS = [
  {
    from: 'Soporte-Compras <ventas@track-order-inv0ice.com>',
    subject: 'Seguimiento de tu compra - adjunto la factura',
    body:
      'Estimado cliente, adjuntamos el archivo de seguimiento de su compra reciente. ' +
      'Abra el documento adjunto (factura_seguimiento.zip) lo antes posible para confirmar su pedido.',
    isPhishing: true,
    señales: [
      'Dominio raro que imita algo confiable ("inv0ice" con un cero).',
      'Archivo adjunto inesperado y comprimido (.zip).',
      'Lenguaje de urgencia para empujarte a abrirlo.',
      'No recuerdas haber hecho esa compra.',
    ],
  },
  {
    from: 'IT Admin <it-support@stránd-helpdesk.net>',
    subject: 'Tu cuenta ya fue reconfigurada',
    body:
      'Hola, el equipo de TI ya reconfiguró tu cuenta. Para terminar, confirma tu ' +
      'contraseña actual respondiendo a este correo. Es un proceso de rutina.',
    isPhishing: true,
    señales: [
      'Un supuesto "administrador" que da falsa sensación de legitimidad.',
      'Pide tu contraseña — TI nunca te la pedirá por correo.',
      'Dominio con caracteres extraños ("stránd").',
      'Intenta que aceptes como normal algo que no solicitaste.',
    ],
  },
  {
    from: 'Microsoft Support <security@ms-account-alert.co>',
    subject: 'Your account will be suspended in 24 hours',
    body:
      'Dear user, we detected unusual activity. Click here to verify your identity ' +
      'or your account will be suspended. Link: http://ms-account-alert.co/verify',
    isPhishing: true,
    señales: [
      'El dominio no es de Microsoft y usa HTTP (no HTTPS).',
      'Urgencia: "se suspenderá en 24 horas".',
      'Saludo genérico ("Dear user") en lugar de tu nombre.',
      'El texto del enlace no coincide con el destino real.',
    ],
  },
  {
    from: 'Recursos Humanos <rrhh@strandcosta.com>',
    subject: 'Recordatorio: capacitación de seguridad el viernes',
    body:
      'Hola equipo, les recordamos que la capacitación de seguridad será el viernes ' +
      'a las 10:00 a. m. en la sala principal. No necesitan hacer nada, solo asistir.',
    isPhishing: false,
    señales: [
      'Remitente del dominio interno real de la empresa.',
      'No pide contraseñas, dinero ni que abras archivos.',
      'No genera urgencia ni presión.',
      'El mensaje es informativo y esperado.',
    ],
  },
  {
    from: 'Gerencia <gerencia@strandcosta.com>',
    subject: 'URGENTE: transferencia a proveedor nuevo, hazla ya',
    body:
      'Necesito que hagas una transferencia de $4,800 a esta cuenta nueva antes de las ' +
      '3 p. m. Estoy en una reunión y no puedo hablar. No comentes esto con nadie todavía.',
    isPhishing: true,
    señales: [
      'Urgencia extrema + secreto ("no comentes con nadie").',
      'Solicitud de dinero a una cuenta nueva.',
      'Evita la verificación ("no puedo hablar").',
      'Aunque el nombre parezca interno, verifica siempre por otro canal.',
    ],
  },
  {
    from: 'Outlook <no-reply@microsoft.com>',
    subject: 'Resumen de tu actividad semanal',
    body:
      'Aquí está el resumen de tu buzón de esta semana. Este es un correo automático ' +
      'informativo; no requiere ninguna acción de tu parte.',
    isPhishing: false,
    señales: [
      'Dominio legítimo de Microsoft (microsoft.com).',
      'Es un resumen informativo, no pide ninguna acción.',
      'No hay enlaces sospechosos ni solicitudes de datos.',
      'No genera urgencia.',
    ],
  },
];

export default function PhishingQuiz() {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = SCENARIOS.length;
  const s = SCENARIOS[current];

  function answer(choicePhishing) {
    if (answered) return;
    const correct = choicePhishing === s.isPhishing;
    setLastCorrect(correct);
    setAnswered(true);
    if (correct) setScore((x) => x + 1);
  }

  function next() {
    if (current + 1 >= total) {
      setFinished(true);
      return;
    }
    setCurrent((c) => c + 1);
    setAnswered(false);
  }

  function restart() {
    setCurrent(0);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / total) * 100);
    let msg = '¡Buen ojo! Sigue practicando para mantener el instinto afilado.';
    if (pct === 100) msg = '¡Perfecto! Detectaste todos los casos. 🏆';
    else if (pct < 50) msg = 'Repasa la guía de arriba y vuelve a intentarlo. ¡Se mejora con práctica!';
    return (
      <div className={styles.quiz}>
        <div className={styles.result}>
          <div className={styles.resultScore}>
            {score} / {total}
          </div>
          <p className={styles.resultMsg}>{msg}</p>
          <button className={styles.btnPrimary} onClick={restart}>
            🔁 Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.progress}>
        Correo {current + 1} de {total} &nbsp;·&nbsp; Aciertos: {score}
      </div>

      <div className={styles.email}>
        <div className={styles.emailRow}>
          <span className={styles.label}>De:</span>
          <span className={styles.mono}>{s.from}</span>
        </div>
        <div className={styles.emailRow}>
          <span className={styles.label}>Asunto:</span>
          <span className={styles.subject}>{s.subject}</span>
        </div>
        <div className={styles.emailBody}>{s.body}</div>
      </div>

      {!answered ? (
        <div className={styles.actions}>
          <button className={styles.btnPhishing} onClick={() => answer(true)}>
            🎣 Es phishing
          </button>
          <button className={styles.btnLegit} onClick={() => answer(false)}>
            ✅ Es legítimo
          </button>
        </div>
      ) : (
        <div
          className={`${styles.feedback} ${
            lastCorrect ? styles.correct : styles.incorrect
          }`}
        >
          <div className={styles.feedbackTitle}>
            {lastCorrect ? '✔ ¡Correcto!' : '✘ No exactamente…'}{' '}
            {s.isPhishing ? 'Este correo ES phishing.' : 'Este correo es legítimo.'}
          </div>
          <ul>
            {s.señales.map((sig, i) => (
              <li key={i}>{sig}</li>
            ))}
          </ul>
          <button className={styles.btnPrimary} onClick={next}>
            {current + 1 >= total ? 'Ver resultado →' : 'Siguiente correo →'}
          </button>
        </div>
      )}
    </div>
  );
}
