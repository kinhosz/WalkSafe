// app/routes/_index.tsx
export default function Index() {
  return (
    <div style={{ marginTop: "3rem", textAlign: "center", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>WalkSafe</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "1rem", lineHeight: 1.5 }}>
        Uma plataforma colaborativa para você se proteger melhor no seu caminho.
      </p>
      <p
        style={{
          fontSize: "1rem",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: 1.5,
        }}
      >
        Descubra relatos recentes na sua região, compartilhe o que aconteceu com
        você e fortaleça a segurança de todos.
      </p>
      <img
        src="/images/walkertalk.png"
        alt="Mapa colaborativo de segurança"
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "auto",
          margin: "0 auto 2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      />
    </div>
  );
  
}