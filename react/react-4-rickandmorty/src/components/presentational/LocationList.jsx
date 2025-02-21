import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useLocations } from "../hooks/useLocations";

export const LocationList = () => {
  const { locations } = useLocations();

  return (
    <div>
      {locations.map((location) => (
        <Collapse
          key={location.id}
          className="episode-collapse"
          title={location.type + ":" + location.name}
          content={
            <>
              {location.residents.length
                ? <CharacterList
                    ids={location.residents.map((character) => {
                      const id = character.split("/").pop();
                      return id;
                  })}
                  />
                : <h3>В этой локации отсутствуют персонажи</h3>
              }
            </>
          }
        />
        ))}
    </div>
  );
};
