import { useState, useEffect } from "react"
import "./style.css"

interface TimeLeft {
    dias: number
    horas: number
    minutos: number
    segundos: number
}

function TimeComponent() {
    const targetDate = new Date("2026-07-18T00:00:00").getTime()

    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date().getTime()
        const difference = targetDate - now

        if (difference <= 0) {
            return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
        }

        return {
            dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
            horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            segundos: Math.floor((difference % (1000 * 60)) / 1000),
        }
    }

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const isFinished =
        timeLeft.dias === 0 &&
        timeLeft.horas === 0 &&
        timeLeft.minutos === 0 &&
        timeLeft.segundos === 0

    const padNumber = (num: number): string => {
        return num.toString().padStart(2, "0")
    }

    return (
        <div id="time-container">
            {isFinished ? (
                <p className="time-finished">🎉 O grande dia chegou! 🎉</p>
            ) : (
                <>
                    <p className="time-title">Contagem Regressiva</p>
                    <div className="time-grid">
                        <div className="time-block">
                            <span className="time-value">{padNumber(timeLeft.dias)}</span>
                            <span className="time-label">Dias</span>
                        </div>
                        <span className="time-separator">:</span>
                        <div className="time-block">
                            <span className="time-value">{padNumber(timeLeft.horas)}</span>
                            <span className="time-label">Horas</span>
                        </div>
                        <span className="time-separator">:</span>
                        <div className="time-block">
                            <span className="time-value">{padNumber(timeLeft.minutos)}</span>
                            <span className="time-label">Minutos</span>
                        </div>
                        <span className="time-separator">:</span>
                        <div className="time-block">
                            <span className="time-value">{padNumber(timeLeft.segundos)}</span>
                            <span className="time-label">Segundos</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default TimeComponent