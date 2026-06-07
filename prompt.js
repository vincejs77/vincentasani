const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "user",
        content: JSON.stringify({
          task: "generate_product_description",
          language: "fr",
          tone: "professionnel",
          input: {
            product_name: "Smartwatch Santé+",
            features: ["Suivi cardiaque", "Design léger", "Autonomie 7 jours"]
          }
        })
      }
    ]
  });


  